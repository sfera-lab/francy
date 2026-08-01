import { forwardRef } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../../utils/cn";
import styles from "./Avatar.module.css";

export const Avatar = forwardRef<HTMLSpanElement, AvatarPrimitive.AvatarProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      data-ui-root
      className={cn(styles.root, className)}
      {...props}
    />
  )
);
Avatar.displayName = "Avatar";

export const AvatarImage = forwardRef<
  HTMLImageElement,
  AvatarPrimitive.AvatarImageProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn(styles.image, className)} {...props} />
));
AvatarImage.displayName = "AvatarImage";

export const AvatarFallback = forwardRef<
  HTMLSpanElement,
  AvatarPrimitive.AvatarFallbackProps
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(styles.fallback, className)}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";
