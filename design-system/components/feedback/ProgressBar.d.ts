export interface ProgressBarProps {
  /** 0–100, or completed count when segments is set. */
  value?: number;
  /** Render N discrete segments (e.g. sets in an exercise). */
  segments?: number;
  height?: number;
  color?: string;
  style?: React.CSSProperties;
}
export function ProgressBar(props: ProgressBarProps): JSX.Element;