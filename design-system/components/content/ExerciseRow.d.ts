export interface ExerciseRowProps {
  name: string;
  /** e.g. "3 × 10 · 60s rest" or "1m". */
  meta?: string;
  image?: string;
  /** Highlights the row currently being performed. */
  active?: boolean;
  onClick?: () => void;
  /** Pass null to hide the ellipsis. */
  onMenu?: (() => void) | null;
  style?: React.CSSProperties;
}
export function ExerciseRow(props: ExerciseRowProps): JSX.Element;