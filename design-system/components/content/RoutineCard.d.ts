/**
 * Saved routine summary with exercise list and a full-width start CTA.
 * @startingPoint section="Content" subtitle="Routine card with Start CTA" viewport="390x220"
 */
export interface RoutineCardProps {
  title: string;
  exercises?: string[];
  /** e.g. "6 exercises · 55 min". */
  meta?: string;
  startLabel?: string;
  onStart?: () => void;
  onMenu?: () => void;
  style?: React.CSSProperties;
}
export function RoutineCard(props: RoutineCardProps): JSX.Element;