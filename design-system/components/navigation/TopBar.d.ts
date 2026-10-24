export interface TopBarProps {
  title?: string;
  /** Custom center node (e.g. a timer) — overrides title. */
  center?: React.ReactNode;
  /** Lucide icon names for leading / trailing buttons. */
  leading?: string;
  trailing?: string;
  onLeading?: () => void;
  onTrailing?: () => void;
  /** Uses solid overlay icon buttons for use over photography. */
  overMedia?: boolean;
  divider?: boolean;
  style?: React.CSSProperties;
}
export function TopBar(props: TopBarProps): JSX.Element;