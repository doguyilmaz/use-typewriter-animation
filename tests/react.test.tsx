import { act, cleanup, render, renderHook, screen } from '@testing-library/react';
import { StrictMode, useEffect, version } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { renderToString } from 'react-dom/server';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Typewriter, type UseTypewriterOptions, useTypewriter } from '../src';

const isReact19 = Number.parseInt(version, 10) >= 19;

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.restoreAllMocks();
});

const advance = (ms: number) => act(() => vi.advanceTimersByTime(ms));

function Imperative({ text, ...options }: UseTypewriterOptions & { text: string }) {
  const { typewriter, elements, cursor } = useTypewriter(options);
  useEffect(() => {
    typewriter.type(text).start();
  }, [typewriter, text]);
  return (
    <p data-testid='out'>
      {elements}
      {cursor}
    </p>
  );
}

const output = () => screen.getByTestId('out');
const cursorOf = (root: ParentNode = document) => root.querySelector('.uta-cursor');
/** Text without the cursor and the cursor stylesheet. */
const typed = (root: HTMLElement = output()) => {
  const clone = root.cloneNode(true) as HTMLElement;
  for (const node of clone.querySelectorAll('.uta-cursor, style')) node.remove();
  return clone.textContent;
};

describe('useTypewriter', () => {
  it('starts idle and empty', () => {
    const { result } = renderHook(() => useTypewriter());
    expect(result.current.state).toEqual({ text: '', segments: [], status: 'idle' });
    expect(result.current.elements).toEqual([]);
  });

  it('renders text as it is typed', () => {
    render(<Imperative text='Hi!' typeSpeed={50} />);
    expect(typed()).toBe('H');
    advance(50);
    expect(typed()).toBe('Hi');
    advance(50);
    expect(typed()).toBe('Hi!');
  });

  it('keeps the typewriter instance stable across renders', () => {
    const { result, rerender } = renderHook(() => useTypewriter());
    const first = result.current.typewriter;
    rerender();
    expect(result.current.typewriter).toBe(first);
  });

  it('renders plain text, styled spans and line breaks', () => {
    function Styled() {
      const { typewriter, elements } = useTypewriter({ typeSpeed: 0 });
      useEffect(() => {
        typewriter
          .type('plain ')
          .colorize('red')
          .type('red')
          .newLine()
          .colorize()
          .type('marked')
          .highlight(10, 6, { background: 'yellow' })
          .start();
      }, [typewriter]);
      return <p data-testid='out'>{elements}</p>;
    }
    render(<Styled />);
    expect(output().innerHTML).toBe(
      'plain <span style="color: red;">red</span><br><span style="background-color: yellow;">marked</span>',
    );
  });

  it('memoizes elements while the text is unchanged', () => {
    const { result, rerender } = renderHook(() => useTypewriter());
    act(() => {
      result.current.typewriter.type('ab', { speed: 0 }).start();
    });
    const { elements, cursor } = result.current;
    rerender();
    expect(result.current.elements).toBe(elements);
    expect(result.current.cursor).toBe(cursor);
  });

  it('applies option changes to the running animation', () => {
    const { rerender } = render(<Imperative text='abc' typeSpeed={50} />);
    rerender(<Imperative text='abc' typeSpeed={200} />);
    advance(50);
    expect(typed()).toBe('ab');
    advance(199);
    expect(typed()).toBe('ab');
    advance(1);
    expect(typed()).toBe('abc');
  });

  it('exposes status changes from controls used in event handlers', () => {
    const { result } = renderHook(() => useTypewriter({ typeSpeed: 50 }));
    act(() => {
      result.current.typewriter.type('abc').start();
    });
    expect(result.current.state.status).toBe('typing');
    act(() => result.current.typewriter.pause());
    expect(result.current.state.status).toBe('paused');
    act(() => result.current.typewriter.skip());
    expect(result.current.state).toMatchObject({ text: 'abc', status: 'done' });
  });

  it('cancels all timers on unmount', () => {
    const { unmount } = render(<Imperative text='a long sentence' loop />);
    expect(vi.getTimerCount()).toBeGreaterThan(0);
    unmount();
    expect(vi.getTimerCount()).toBe(0);
  });

  it('does not queue steps twice under StrictMode', () => {
    render(
      <StrictMode>
        <Imperative text='once' typeSpeed={0} />
      </StrictMode>,
    );
    expect(typed()).toBe('once');
  });

  describe('sequence', () => {
    function Sequence(options: UseTypewriterOptions) {
      const { elements } = useTypewriter(options);
      return <p data-testid='out'>{elements}</p>;
    }

    it('starts on mount and types each string with typeTo', () => {
      render(
        <Sequence sequence={['I like cats', 100, 'I like dogs']} typeSpeed={0} deleteSpeed={0} />,
      );
      expect(typed()).toBe('I like cats');
      advance(100);
      expect(typed()).toBe('I like dogs');
    });

    it('calls function steps and loops', () => {
      const step = vi.fn();
      render(<Sequence sequence={['a', step, 100, '']} typeSpeed={0} deleteSpeed={0} loop />);
      expect(step).toHaveBeenCalledTimes(1);
      act(() => vi.advanceTimersByTime(100));
      expect(typed()).toBe('a');
      expect(step).toHaveBeenCalledTimes(2);
    });

    it('reads the sequence once; a new key restarts it', () => {
      const { rerender } = render(<Sequence key='1' sequence={['first']} typeSpeed={0} />);
      rerender(<Sequence key='1' sequence={['second']} typeSpeed={0} />);
      expect(typed()).toBe('first');
      rerender(<Sequence key='2' sequence={['second']} typeSpeed={0} />);
      expect(typed()).toBe('second');
    });

    it('does not type twice under StrictMode', () => {
      render(
        <StrictMode>
          <Sequence sequence={['strict']} typeSpeed={0} />
        </StrictMode>,
      );
      expect(typed()).toBe('strict');
    });
  });
});

describe('cursor', () => {
  it.each([
    ['bar', '|'],
    ['block', '▋'],
    ['underline', '_'],
  ] as const)('draws %s as %s', (cursorStyle, char) => {
    render(<Imperative text='' cursorStyle={cursorStyle} />);
    expect(cursorOf()?.textContent).toBe(char);
  });

  it('accepts a custom character, color and blink speed', () => {
    render(<Imperative text='' cursorChar='█' cursorColor='red' cursorBlinkSpeed={600} />);
    const cursor = cursorOf() as HTMLElement;
    expect(cursor.textContent).toBe('█');
    expect(cursor.style.color).toBe('red');
    expect(cursor.style.animationDuration).toBe('600ms');
  });

  it('is hidden from assistive technology', () => {
    render(<Imperative text='' />);
    expect(cursorOf()?.getAttribute('aria-hidden')).toBe('true');
  });

  it('stays solid while typing and blinks otherwise', () => {
    render(<Imperative text='ab' typeSpeed={50} />);
    expect(cursorOf()?.hasAttribute('data-blink')).toBe(false);
    advance(100);
    expect(cursorOf()?.hasAttribute('data-blink')).toBe(true);
  });

  it('can be disabled', () => {
    render(<Imperative text='' enableCursor={false} />);
    expect(cursorOf()).toBeNull();
    expect(output().innerHTML).toBe('');
  });

  it('ships its own stylesheet with a reduced-motion guard', () => {
    render(<Imperative text='' />);
    const css = document.querySelector('style')?.textContent;
    expect(css).toContain('@keyframes uta-blink');
    expect(css).toContain('prefers-reduced-motion:no-preference');
  });

  it.runIf(isReact19)('is hoisted into <head> once for any number of instances (React 19)', () => {
    render(
      <>
        <Imperative text='' />
        <Imperative text='' />
      </>,
    );
    expect(
      document.head.querySelectorAll('style[data-href="use-typewriter-animation"]'),
    ).toHaveLength(1);
    expect(document.body.querySelector('style')).toBeNull();
  });
});

describe('Typewriter', () => {
  it('renders the sequence into the chosen element and forwards props', () => {
    render(
      <Typewriter
        as='h1'
        className='title'
        id='hero'
        aria-label='Greeting'
        sequence={['Hello']}
        typeSpeed={0}
      />,
    );
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.id).toBe('hero');
    expect(heading.className).toBe('title');
    expect(heading.getAttribute('aria-label')).toBe('Greeting');
    expect(typed(heading)).toBe('Hello');
  });

  it('defaults to a span', () => {
    const { container } = render(<Typewriter sequence={['x']} typeSpeed={0} />);
    expect(container.firstElementChild?.tagName).toBe('SPAN');
  });

  it('passes options to the hook', () => {
    const { container } = render(
      <Typewriter sequence={['ab']} typeSpeed={100} cursorStyle='underline' />,
    );
    const root = container.firstElementChild as HTMLElement;
    expect(typed(root)).toBe('a');
    expect(cursorOf(root)?.textContent).toBe('_');
    advance(100);
    expect(typed(root)).toBe('ab');
  });

  it('re-renders without re-rendering its parent', () => {
    let parentRenders = 0;
    function Parent() {
      parentRenders++;
      return <Typewriter sequence={['abcdef']} typeSpeed={50} />;
    }
    render(<Parent />);
    advance(500);
    expect(parentRenders).toBe(1);
  });
});

describe('server rendering', () => {
  const App = () => <Typewriter as='p' sequence={['Hello']} typeSpeed={0} />;

  it('renders an empty element with the cursor on the server', () => {
    const html = renderToString(<App />);
    expect(html).toContain('<p>');
    expect(html).toContain('uta-cursor');
    expect(html).not.toContain('Hello');
  });

  it('hydrates without mismatches and starts typing', async () => {
    const container = document.createElement('div');
    container.innerHTML = renderToString(<App />);
    document.body.appendChild(container);
    const errors = vi.spyOn(console, 'error').mockImplementation(() => {});
    const onRecoverableError = vi.fn();
    const root = await act(async () => hydrateRoot(container, <App />, { onRecoverableError }));
    expect(onRecoverableError).not.toHaveBeenCalled();
    expect(errors).not.toHaveBeenCalled();
    expect(typed(container.querySelector('p') as HTMLElement)).toBe('Hello');
    act(() => root.unmount());
    container.remove();
  });
});

describe('lifecycle', () => {
  it('leaves no timers when unmounted while paused or waiting', () => {
    const { result, unmount } = renderHook(() => useTypewriter({ typeSpeed: 0 }));
    act(() => {
      result.current.typewriter.type('a').pauseFor(5000).type('b').start();
    });
    expect(result.current.state.status).toBe('waiting');
    act(() => result.current.typewriter.pause());
    unmount();
    expect(vi.getTimerCount()).toBe(0);
  });

  it('stops looping when the loop option turns off', () => {
    const { result, rerender } = renderHook(
      ({ loop }) => useTypewriter({ loop, typeSpeed: 0, deleteSpeed: 0 }),
      { initialProps: { loop: true } },
    );
    act(() => {
      result.current.typewriter.type('a').pauseFor(100).deleteAll().start();
    });
    rerender({ loop: false });
    act(() => vi.advanceTimersByTime(100));
    expect(result.current.state.status).toBe('done');
    expect(vi.getTimerCount()).toBe(0);
  });

  it('blinks the cursor while waiting and paused', () => {
    const { result } = renderHook(() => useTypewriter({ typeSpeed: 50 }));
    const blinking = () => render(result.current.cursor).container.querySelector('[data-blink]');
    act(() => {
      result.current.typewriter.type('a').pauseFor(500).type('b').start();
    });
    expect(blinking()).toBeNull();
    act(() => vi.advanceTimersByTime(50));
    expect(result.current.state.status).toBe('waiting');
    expect(blinking()).not.toBeNull();
    act(() => result.current.typewriter.pause());
    expect(blinking()).not.toBeNull();
  });

  it('forwards aria-hidden from <Typewriter>', () => {
    const { container } = render(<Typewriter aria-hidden sequence={['x']} typeSpeed={0} />);
    expect(container.firstElementChild?.getAttribute('aria-hidden')).toBe('true');
  });
});

describe('re-render cost', () => {
  it('renders once per typed character', () => {
    let renders = 0;
    function Counter() {
      const { typewriter, elements } = useTypewriter({ typeSpeed: 50, enableCursor: false });
      renders++;
      useEffect(() => {
        typewriter.type('abcde').start();
      }, [typewriter]);
      return <p>{elements}</p>;
    }
    render(<Counter />);
    const afterMount = renders;
    for (let i = 0; i < 5; i++) advance(50);
    // One render per character after the first, plus one for the final "done" status.
    expect(renders - afterMount).toBe(5);
  });

  it('renders once at the start of a pause and not while it runs', () => {
    let renders = 0;
    function Paused() {
      const { typewriter, elements } = useTypewriter({ typeSpeed: 0, enableCursor: false });
      renders++;
      useEffect(() => {
        typewriter.type('a').pauseFor(1000).type('b').start();
      }, [typewriter]);
      return <p>{elements}</p>;
    }
    render(<Paused />);
    const afterMount = renders;
    for (let i = 0; i < 9; i++) advance(100);
    expect(renders).toBe(afterMount);
    advance(100);
    expect(renders).toBe(afterMount + 1);
  });
});
