/**
 * Bottom app navigation with a pink pill indicator behind the active icon.
 * @startingPoint section="Navigation" subtitle="Bottom tab bar" viewport="390x100"
 */
export interface TabBarProps {
  items: { id: string; label: string; icon: string }[];
  active?: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}
export function TabBar(props: TabBarProps): JSX.Element;