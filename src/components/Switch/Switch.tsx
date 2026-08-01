import { forwardRef } from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "../../utils/cn";
import styles from "./Switch.module.css";

export type SwitchProps = SwitchPrimitive.SwitchProps;

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, ...props }, ref) => {
    return (
      <SwitchPrimitive.Root
        ref={ref}
        data-ui-root
        className={cn(styles.root, className)}
        {...props}
      >
        <SwitchPrimitive.Thumb className={styles.thumb} />
      </SwitchPrimitive.Root>
    );
  }
);

Switch.displayName = "Switch";
