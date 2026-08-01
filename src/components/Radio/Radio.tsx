import { forwardRef } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../../utils/cn";
import styles from "./Radio.module.css";

export type RadioGroupProps = RadioGroupPrimitive.RadioGroupProps;
export type RadioGroupItemProps = RadioGroupPrimitive.RadioGroupItemProps;

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Root
        ref={ref}
        data-ui-root
        className={cn(styles.group, className)}
        {...props}
      />
    );
  }
);
RadioGroup.displayName = "RadioGroup";

export const RadioGroupItem = forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(styles.item, className)}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className={styles.indicator} />
      </RadioGroupPrimitive.Item>
    );
  }
);
RadioGroupItem.displayName = "RadioGroupItem";
