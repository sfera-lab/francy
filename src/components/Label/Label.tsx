import { forwardRef } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "../../utils/cn";
import styles from "./Label.module.css";

export type LabelProps = LabelPrimitive.LabelProps;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <LabelPrimitive.Root
        ref={ref}
        data-ui-root
        className={cn(styles.root, className)}
        {...props}
      />
    );
  }
);

Label.displayName = "Label";
