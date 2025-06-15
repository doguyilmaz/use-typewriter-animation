import { CSSProperties } from 'react';

export const commonStyles = {
  container: {
    maxWidth: '100%',
    width: '100%',
    margin: '0 auto',
    boxSizing: 'border-box' as const,
  },

  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  flexBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  flexEnd: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  card: {
    // borderRadius: '12px',
    // border: '1px solid var(--ifm-color-emphasis-200)',
    // backgroundColor: 'var(--ifm-background-surface-color)',
    // overflow: 'hidden',
  },

  button: {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: '500',
    transition: 'all 0.15s ease',
  },

  tag: {
    padding: '0.25rem 0.75rem',
    borderRadius: '12px',
    fontSize: '0.8rem',
    border: '1px solid var(--ifm-color-emphasis-200)',
    backgroundColor: 'var(--ifm-color-emphasis-100)',
    color: 'var(--ifm-color-emphasis-800)',
  },
} as const;

export const createDifficultyStyle = (color: string, bg: string): CSSProperties => ({
  ...commonStyles.tag,
  backgroundColor: bg,
  color: color,
  borderColor: color,
  fontWeight: '600',
});

export const createToggleButtonStyle = (active: boolean): CSSProperties => ({
  ...commonStyles.button,
  backgroundColor: active ? 'var(--ifm-color-content)' : 'transparent',
  color: active ? 'var(--ifm-background-color)' : 'var(--ifm-color-content-secondary)',
  minWidth: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.25rem',
});
