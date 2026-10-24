export interface IconProps {
  /** Lucide icon name, kebab-case (e.g. "dumbbell", "play", "chevron-left"). */
  name: string;
  /** Pixel size. Default 24. */
  size?: number;
  /** Any CSS color; defaults to currentColor. */
  color?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;