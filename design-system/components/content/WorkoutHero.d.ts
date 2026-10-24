/**
 * Full-bleed photo/video header with a legibility scrim and expanded sentence-case title.
 * @startingPoint section="Content" subtitle="Full-bleed workout hero" viewport="390x560"
 */
export interface WorkoutHeroProps {
  /** Image URL; omitted = dark placeholder gradient. */
  image?: string;
  /** Small line above the title, e.g. "Thursday, June 27". */
  eyebrow?: string;
  title: React.ReactNode;
  height?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function WorkoutHero(props: WorkoutHeroProps): JSX.Element;