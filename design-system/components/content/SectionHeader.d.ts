export interface SectionHeaderProps {
  title: React.ReactNode;
  /** Text action at right (e.g. "See all"). */
  action?: string;
  /** Icon action at right (e.g. "folder-plus"). */
  actionIcon?: string;
  onAction?: () => void;
  /** Adds a disclosure chevron. */
  collapsible?: boolean;
  open?: boolean;
  onToggle?: () => void;
  /** Smaller grey folder-style title. */
  muted?: boolean;
  style?: React.CSSProperties;
}
export function SectionHeader(props: SectionHeaderProps): JSX.Element;