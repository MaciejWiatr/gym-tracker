export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  style?: React.CSSProperties;
}
export function Switch(props: SwitchProps): JSX.Element;