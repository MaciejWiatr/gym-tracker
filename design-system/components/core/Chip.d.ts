export interface ChipProps {
  children?: React.ReactNode;
  /** Selected chips invert to white-on-dark. */
  selected?: boolean;
  icon?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function Chip(props: ChipProps): JSX.Element;