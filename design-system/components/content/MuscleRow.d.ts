export interface MuscleRowProps {
  name: string;
  /** Share of workload, 0–100. */
  percent?: number;
  /** Value at full bar length. Pass the same max to every row in a set so all bars share one scale. */
  max?: number;
  /** Marks the decisive row (pink fill, semibold label). Use for one row at most. */
  highlight?: boolean;
  divider?: boolean;
  style?: React.CSSProperties;
}
export function MuscleRow(props: MuscleRowProps): JSX.Element;