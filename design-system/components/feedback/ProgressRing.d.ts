export interface ProgressRingProps {
  /** 0–100. */
  value?: number;
  size?: number;
  stroke?: number;
  color?: string;
  /** Centered content — usually the rest-timer numerals. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function ProgressRing(props: ProgressRingProps): JSX.Element;