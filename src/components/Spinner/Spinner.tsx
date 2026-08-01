import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import styles from "./Spinner.module.css";

export type SpinnerSize = "sm" | "md" | "lg";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  size?: SpinnerSize;
  label?: string;
}

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size = "md", label = "Loading", ...props }, ref) => (
    <span
      ref={ref}
      data-ui-root
      data-size={size}
      role="status"
      aria-label={label}
      className={cn(styles.root, className)}
      {...props}
    />
  )
);

Spinner.displayName = "Spinner";
