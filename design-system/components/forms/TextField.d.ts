export interface TextFieldProps {
  label?: string;
  value?: string;
  placeholder?: string;
  /** Leading Lucide icon (e.g. "search"). */
  icon?: string;
  type?: string;
  onChange?: (v: string) => void;
  style?: React.CSSProperties;
}
export function TextField(props: TextFieldProps): JSX.Element;