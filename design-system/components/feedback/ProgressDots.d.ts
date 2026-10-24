export interface ProgressDotsProps {
  count?: number;
  /** Active index (0-based) — stretches into a pink pill. */
  index?: number;
  style?: React.CSSProperties;
}
export function ProgressDots(props: ProgressDotsProps): JSX.Element;