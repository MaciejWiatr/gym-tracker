export interface BadgeProps {
  children?: React.ReactNode;
  /** accent (pink, ink text), soft (strawberry tint, rose text), neutral, live (flare red), success (PR). All pass 4.5:1. */
  tone?: "accent" | "soft" | "neutral" | "live" | "success";
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;