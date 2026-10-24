export interface SegmentedControlProps {
  options: string[];
  value?: string;
  onChange?: (v: string) => void;
  style?: React.CSSProperties;
}
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;