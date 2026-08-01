import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";
import styles from "./Badge.module.css";

export type BadgeVariant = "neutral" | "accent" | "success" | "danger" | "warning";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "neutral", ...props }, ref) => (
    <span
      ref={ref}
      data-ui-root
      data-variant={variant}
      className={cn(styles.root, className)}
      {...props}
    />
  )
);

Badge.displayName = "Badge";
