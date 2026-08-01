import { useId, type ReactElement, type ReactNode, cloneElement } from "react";
import { cn } from "../../utils/cn";
import { Label } from "../Label";
import styles from "./FormField.module.css";

export interface FormFieldProps {
  label: ReactNode;
  htmlFor?: string;
  error?: ReactNode;
  hint?: ReactNode;
  className?: string;
  children: ReactElement<{ id?: string; "aria-invalid"?: boolean; "aria-describedby"?: string }>;
}

/**
 * Wires a Label, a single form control, and optional hint/error text
 * together with matching ids and aria-describedby — the control is
 * responsible for its own visual invalid state via its `invalid` prop.
 */
export function FormField({
  label,
  htmlFor,
  error,
  hint,
  className,
  children,
}: FormFieldProps) {
  const generatedId = useId();
  const controlId = htmlFor ?? children.props.id ?? generatedId;
  const descriptionId = error || hint ? `${controlId}-description` : undefined;

  const control = cloneElement(children, {
    id: controlId,
    "aria-invalid": Boolean(error) || undefined,
    "aria-describedby": descriptionId,
  });

  return (
    <div data-ui-root className={cn(styles.root, className)}>
      <Label htmlFor={controlId}>{label}</Label>
      {control}
      {error ? (
        <p id={descriptionId} className={styles.error}>
          {error}
        </p>
      ) : hint ? (
        <p id={descriptionId} className={styles.hint}>
          {hint}
        </p>
      ) : null}
    </div>
  );
}
