import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import styles from "./Textarea.module.css";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid = false, ...props }, ref) => {
    return (
      <textarea
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

Textarea.displayName = "Textarea";
