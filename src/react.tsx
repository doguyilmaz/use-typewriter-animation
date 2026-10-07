import {
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  version,
} from 'react';
import {
  createTypewriter,
  type TypewriterInstance,
  type TypewriterOptions,
  type TypewriterSegment,
  type TypewriterState,
} from './core';

/** Strings are typed with `typeTo`, numbers are pauses in ms, functions are called. */
export type TypewriterSequence = ReadonlyArray<string | number | (() => void)>;

export type CursorStyle = 'bar' | 'block' | 'underline';

export interface UseTypewriterOptions extends TypewriterOptions {
  /** Steps to run on mount. Read once: remount (e.g. change `key`) to use a new sequence. */
  sequence?: TypewriterSequence | undefined;
  /** @default true */
  enableCursor?: boolean | undefined;
  /** @default 'bar' */
  cursorStyle?: CursorStyle | undefined;
  /** Overrides the character drawn by `cursorStyle`. */
  cursorChar?: string | undefined;
  cursorColor?: string | undefined;
  /** Duration of one blink cycle in ms. @default 1000 */
  cursorBlinkSpeed?: number | undefined;
}

export interface UseTypewriterReturn {
  typewriter: TypewriterInstance;
  state: TypewriterState;
  /** The typed text: plain strings, styled `<span>`s and `<br>`s. */
  elements: ReactNode[];
  cursor: ReactElement | null;
}

const CURSOR_CHARS: Record<CursorStyle, string> = { bar: '|', block: '▋', underline: '_' };

const CURSOR_CSS =
  '.uta-cursor{-webkit-user-select:none;user-select:none}' +
  '@keyframes uta-blink{50%{opacity:0}}' +
  '@media (prefers-reduced-motion:no-preference){.uta-cursor[data-blink]{animation:uta-blink 1s step-end infinite}}';

// React 19 hoists a <style> with `href` and `precedence` into <head> and renders it once.
const STYLE_PROPS =
  Number.parseInt(version, 10) >= 19 ? { href: 'use-typewriter-animation', precedence: 'low' } : {};

const renderSegment = (segment: TypewriterSegment): ReactNode => {
  if (segment.text === '\n') return <br key={segment.id} />;
  if (segment.color === undefined && segment.background === undefined) return segment.text;
  return (
    <span key={segment.id} style={{ color: segment.color, backgroundColor: segment.background }}>
      {segment.text}
    </span>
  );
};

export function useTypewriter(options: UseTypewriterOptions = {}): UseTypewriterReturn {
  const {
    typeSpeed,
    deleteSpeed,
    loop,
    humanize,
    respectReducedMotion,
    sequence,
    enableCursor = true,
    cursorStyle = 'bar',
    cursorChar,
    cursorColor,
    cursorBlinkSpeed = 1000,
  } = options;
  const [typewriter] = useState(() => createTypewriter(options));
  const [initialSequence] = useState(sequence);
  const state = useSyncExternalStore(
    typewriter.subscribe,
    typewriter.getState,
    typewriter.getState,
  );

  useEffect(() => {
    typewriter.configure({ typeSpeed, deleteSpeed, loop, humanize, respectReducedMotion });
  }, [typewriter, typeSpeed, deleteSpeed, loop, humanize, respectReducedMotion]);

  // Resetting on cleanup cancels timers on unmount and keeps StrictMode's double mount from
  // queueing the same steps twice.
  useEffect(() => {
    if (initialSequence) {
      for (const step of initialSequence) {
        if (typeof step === 'string') typewriter.typeTo(step);
        else if (typeof step === 'number') typewriter.pauseFor(step);
        else typewriter.call(step);
      }
      typewriter.start();
    }
    return () => {
      typewriter.reset();
    };
  }, [typewriter, initialSequence]);

  const elements = useMemo(() => state.segments.map(renderSegment), [state.segments]);

  const blink = state.status !== 'typing' && state.status !== 'deleting';
  const char = cursorChar ?? CURSOR_CHARS[cursorStyle];
  const cursor = useMemo(() => {
    if (!enableCursor) return null;
    const style: CSSProperties = { color: cursorColor, animationDuration: `${cursorBlinkSpeed}ms` };
    return (
      <>
        <style {...STYLE_PROPS}>{CURSOR_CSS}</style>
        <span
          className='uta-cursor'
          aria-hidden='true'
          data-blink={blink || undefined}
          style={style}
        >
          {char}
        </span>
      </>
    );
  }, [enableCursor, blink, char, cursorColor, cursorBlinkSpeed]);

  return { typewriter, state, elements, cursor };
}

export interface TypewriterProps
  extends Omit<UseTypewriterOptions, 'sequence'>,
    Omit<HTMLAttributes<HTMLElement>, 'children'> {
  sequence: TypewriterSequence;
  /** @default 'span' */
  as?: ElementType | undefined;
}

/** Renders a typewriter animation. Re-renders stay inside this component. */
export function Typewriter({
  as: Tag = 'span',
  sequence,
  typeSpeed,
  deleteSpeed,
  loop,
  humanize,
  respectReducedMotion,
  enableCursor,
  cursorStyle,
  cursorChar,
  cursorColor,
  cursorBlinkSpeed,
  ...props
}: TypewriterProps): ReactElement {
  const { elements, cursor } = useTypewriter({
    sequence,
    typeSpeed,
    deleteSpeed,
    loop,
    humanize,
    respectReducedMotion,
    enableCursor,
    cursorStyle,
    cursorChar,
    cursorColor,
    cursorBlinkSpeed,
  });
  return (
    <Tag {...props}>
      {elements}
      {cursor}
    </Tag>
  );
}
