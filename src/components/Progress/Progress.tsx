import { forwardRef } from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../../utils/cn";
import styles from "./Progress.module.css";

export type ProgressProps = ProgressPrimitive.ProgressProps;

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      data-ui-root
      value={value}
      className={cn(styles.root, className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={styles.indicator}
        style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
);

Progress.displayName = "Progress";
