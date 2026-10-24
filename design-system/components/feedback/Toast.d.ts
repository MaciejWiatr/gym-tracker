export interface ToastProps {
  message: string;
  icon?: string;
  /** neutral = inverse pill; success = pink pill (PRs, workout saved). */
  tone?: "neutral" | "success";
  style?: React.CSSProperties;
}
export function Toast(props: ToastProps): JSX.Element;