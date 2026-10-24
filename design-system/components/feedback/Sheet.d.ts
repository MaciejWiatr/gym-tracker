export interface SheetProps {
  open?: boolean;
  title?: string;
  children?: React.ReactNode;
  /** Called on scrim tap. */
  onClose?: () => void;
  style?: React.CSSProperties;
}
export function Sheet(props: SheetProps): JSX.Element;