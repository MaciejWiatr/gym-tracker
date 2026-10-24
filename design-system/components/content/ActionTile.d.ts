export interface ActionTileProps {
  icon: string;
  label: string;
  /** Dashed outline "add" slot with accent label. */
  dashed?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function ActionTile(props: ActionTileProps): JSX.Element;