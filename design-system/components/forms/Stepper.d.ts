export interface StepperProps {
  value?: number;
  step?: number;
  min?: number;
  /** "kg", "lb", "reps"… */
  unit?: string;
  label?: string;
  onChange?: (v: number) => void;
  style?: React.CSSProperties;
}
export function Stepper(props: StepperProps): JSX.Element;