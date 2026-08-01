import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import styles from "./Input.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid = false, ...props }, ref) => {
    return (
      <input
        ref={ref}
        data-ui-root
        data-invalid={invalid || undefined}
        aria-invalid={invalid || undefined}
        className={cn(styles.root, className)}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
