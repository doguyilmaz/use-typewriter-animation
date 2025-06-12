'use client';

import { useEffect, useState, useMemo } from 'react';
import {
  useTypewriter,
  type UseTypewriterOptions,
  type UseTypewriterReturn,
} from './useTypewriter';

/**
 * Server-safe options for SSR/RSC environments
 */
export type UseTypewriterServerOptions = UseTypewriterOptions & {
  /** Whether to hydrate immediately on client (default: true) */
  hydrateImmediately?: boolean;
  /** Initial text to display during SSR (prevents hydration mismatch) */
  ssrFallbackText?: string;
  /** Whether to start animation automatically after hydration (default: true) */
  autoStartAfterHydration?: boolean;
  /** Delay before starting animation after hydration in ms (default: 0) */
  hydrationDelay?: number;
};

/**
 * Enhanced return type for server environments
 */
export type UseTypewriterServerReturn = UseTypewriterReturn & {
  /** Whether the component is currently hydrating */
  isHydrating: boolean;
  /** Whether we're in a server environment */
  isServer: boolean;
  /** Manually trigger hydration (useful for lazy loading) */
  triggerHydration: () => void;
};

/**
 * Server-safe useTypewriter hook for SSR/RSC environments
 * Handles hydration gracefully and prevents mismatches
 */
export function useTypewriterServer(
  options: UseTypewriterServerOptions = {}
): UseTypewriterServerReturn {
  const {
    hydrateImmediately = true,
    ssrFallbackText = '',
    autoStartAfterHydration = true,
    hydrationDelay = 0,
    ...typewriterOptions
  } = options;

  const [isHydrating, setIsHydrating] = useState(true);
  const [isServer, setIsServer] = useState(true);
  const [shouldStart, setShouldStart] = useState(false);

  // Detect if we're on client after hydration
  useEffect(() => {
    setIsServer(false);

    if (hydrateImmediately) {
      const timer = setTimeout(() => {
        setIsHydrating(false);
        if (autoStartAfterHydration) {
          setShouldStart(true);
        }
      }, hydrationDelay);

      return () => clearTimeout(timer);
    } else {
      setIsHydrating(false);
      return undefined;
    }
  }, [hydrateImmediately, autoStartAfterHydration, hydrationDelay]);

  // Initialize typewriter with conditional options
  const conditionalOptions = useMemo(() => {
    if (isServer || isHydrating) {
      // During SSR or hydration, disable animations
      return {
        ...typewriterOptions,
        typeSpeed: 0,
        deleteSpeed: 0,
        enableCursor: false,
      };
    }
    return typewriterOptions;
  }, [isServer, isHydrating, typewriterOptions]);

  const typewriterResult = useTypewriter(conditionalOptions);

  // Auto-start after hydration if enabled
  useEffect(() => {
    if (shouldStart && !isHydrating && !isServer) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        typewriterResult.typewriter.start();
      }, 10);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [shouldStart, isHydrating, isServer, typewriterResult.typewriter]);

  const triggerHydration = () => {
    setIsHydrating(false);
    if (autoStartAfterHydration) {
      setShouldStart(true);
    }
  };

  // Return SSR-safe content during server rendering
  const ssrSafeElements = useMemo(() => {
    if (isServer && ssrFallbackText) {
      return [<span key='ssr-fallback'>{ssrFallbackText}</span>];
    }
    return typewriterResult.elements;
  }, [isServer, ssrFallbackText, typewriterResult.elements]);

  const ssrSafeCursor = useMemo(() => {
    if (isServer || isHydrating) {
      return null; // No cursor during SSR or hydration
    }
    return typewriterResult.cursor;
  }, [isServer, isHydrating, typewriterResult.cursor]);

  return {
    ...typewriterResult,
    elements: ssrSafeElements,
    cursor: ssrSafeCursor,
    isHydrating,
    isServer,
    triggerHydration,
  };
}

/**
 * Server Component wrapper for static typewriter text
 * Can be used in RSC environments for SEO-friendly static text
 */
export interface TypewriterServerComponentProps {
  /** Static text to display (for SEO and SSR) */
  text: string;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Whether to show cursor in static mode */
  showCursor?: boolean;
  /** Custom cursor character */
  cursorChar?: string;
}

/**
 * Server Component for static typewriter display
 * Renders immediately on server, no hydration needed
 */
export function TypewriterServerComponent({
  text,
  className,
  style,
  showCursor = false,
  cursorChar = '|',
}: TypewriterServerComponentProps) {
  const defaultStyle: React.CSSProperties = {
    fontFamily: 'monospace',
    ...style,
  };

  return (
    <span className={className} style={defaultStyle}>
      {text}
      {showCursor && (
        <span
          style={{
            animation: 'typewriter-blink 1s step-end infinite',
            marginLeft: '2px',
          }}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
}

/**
 * Hook for detecting server/client environment
 * Useful for conditional rendering
 */
export function useIsomorphicEffect() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return {
    isClient,
    isServer: !isClient,
  };
}
