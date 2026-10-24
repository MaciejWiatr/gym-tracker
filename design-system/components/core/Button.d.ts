/**
 * Primary action control. Pink pill for the main CTA, inverse/tonal for the rest.
 * @startingPoint section="Core" subtitle="Pill buttons: pink, inverse, tonal, outline" viewport="700x260"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = pink, ink label (one per screen); secondary = plum inverse pill; tonal = raised surface; outline; ghost = text only; danger. */
  variant?: "primary" | "secondary" | "tonal" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  /** Leading Lucide icon name. */
  icon?: string;
  iconRight?: string;
  fullWidth?: boolean;
  /** pill (default) or rounded (14px) — rounded is for quick-start tiles inside lists. */
  shape?: "pill" | "rounded";
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;