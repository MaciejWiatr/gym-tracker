export interface IconButtonProps {
  /** Lucide icon name. */
  icon: string;
  /** overlay = solid dark chip over media (no blur); tonal; plain; accent = pink fill, ink glyph; soft = strawberry fill, rose glyph. */
  variant?: "overlay" | "tonal" | "plain" | "accent" | "soft";
  /** Diameter in px; default 44 (minimum tap target). */
  size?: number;
  label?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function IconButton(props: IconButtonProps): JSX.Element;