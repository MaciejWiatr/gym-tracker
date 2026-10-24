export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  /** Box size; 32 in set rows. */
  size?: number;
  label?: string;
  style?: React.CSSProperties;
}
export function Checkbox(props: CheckboxProps): JSX.Element;