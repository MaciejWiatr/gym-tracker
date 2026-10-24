export interface StatTileProps {
  label: string;
  value: string | number;
  unit?: string;
  /** e.g. "+12% vs last week". */
  delta?: string;
  style?: React.CSSProperties;
}
export function StatTile(props: StatTileProps): JSX.Element;