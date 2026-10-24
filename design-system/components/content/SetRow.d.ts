export interface SetRowProps {
  index?: number | string;
  /** Last session's value, e.g. "80kg × 8". */
  previous?: string;
  weight?: number | string;
  reps?: number | string;
  done?: boolean;
  onToggle?: (done: boolean) => void;
  /** Renders the column header row instead. */
  header?: boolean;
  style?: React.CSSProperties;
}
export function SetRow(props: SetRowProps): JSX.Element;