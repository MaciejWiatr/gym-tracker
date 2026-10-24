export interface ActionRowProps {
  /** 3–4 actions with short sentence-case labels (Save, Schedule, Share, Download). */
  items: { icon: string; label: string; active?: boolean; onClick?: () => void }[];
  style?: React.CSSProperties;
}
export function ActionRow(props: ActionRowProps): JSX.Element;