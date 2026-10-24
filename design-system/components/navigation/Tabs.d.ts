export interface TabsProps {
  items: string[];
  active?: string;
  onChange?: (tab: string) => void;
  style?: React.CSSProperties;
}
export function Tabs(props: TabsProps): JSX.Element;