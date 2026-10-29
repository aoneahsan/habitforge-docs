import React, { type ReactNode } from 'react';

/** Which picture sits beside a group's heading. */
export type GroupIconName = 'docs' | 'habits' | 'features' | 'apps' | 'reference' | 'site';

/** Each icon's shapes, on a 24-unit grid with a round 1.75 stroke in the text's own colour. */
const SHAPES: Record<GroupIconName, ReactNode> = {
  docs: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2.5" />
      <path d="M9 8h6M9 12h6M9 16h3.5" />
    </>
  ),
  // Two strands twisting into one: the rope a habit becomes.
  habits: (
    <>
      <path d="M7 3c0 4.5 10 4.5 10 9s-10 4.5-10 9" />
      <path d="M17 3c0 4.5-10 4.5-10 9s10 4.5 10 9" />
    </>
  ),
  features: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.75" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.75" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.75" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.75" />
    </>
  ),
  apps: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  reference: (
    <>
      <path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5z" />
      <path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H19v-3" />
      <path d="M9 7.5h6M9 11h4" />
    </>
  ),
  site: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15 9-1.8 4.2L9 15l1.8-4.2z" />
    </>
  ),
};

/**
 * A group's icon. It is decoration: the heading beside it says the same thing, so assistive tech skips it.
 *
 * @param props.name - which icon
 * @param props.className - sizing and colour from the page's styles
 * @returns the inline SVG
 */
export function GroupIcon({ name, className }: { readonly name: GroupIconName; readonly className?: string }): ReactNode {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {SHAPES[name]}
    </svg>
  );
}
