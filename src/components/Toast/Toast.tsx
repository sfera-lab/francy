import { forwardRef } from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "../../utils/cn";
import styles from "./Toast.module.css";

export const ToastProvider = ToastPrimitive.Provider;

export const ToastViewport = forwardRef<
  HTMLOListElement,
  ToastPrimitive.ToastViewportProps
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    data-ui-root
    className={cn(styles.viewport, className)}
    {...props}
  />
));
ToastViewport.displayName = "ToastViewport";

export type ToastVariant = "default" | "success" | "danger";

export interface ToastRootProps extends ToastPrimitive.ToastProps {
  variant?: ToastVariant;
}

export const Toast = forwardRef<HTMLLIElement, ToastRootProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <ToastPrimitive.Root
      ref={ref}
      data-variant={variant}
      className={cn(styles.root, className)}
      {...props}
    />
  )
);
Toast.displayName = "Toast";

export const ToastTitle = forwardRef<
  HTMLDivElement,
  ToastPrimitive.ToastTitleProps
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title ref={ref} className={cn(styles.title, className)} {...props} />
));
ToastTitle.displayName = "ToastTitle";

export const ToastDescription = forwardRef<
  HTMLDivElement,
  ToastPrimitive.ToastDescriptionProps
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={cn(styles.description, className)}
    {...props}
  />
));
ToastDescription.displayName = "ToastDescription";

export const ToastAction = forwardRef<
  HTMLButtonElement,
  ToastPrimitive.ToastActionProps
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action ref={ref} className={cn(styles.action, className)} {...props} />
));
ToastAction.displayName = "ToastAction";

export const ToastClose = forwardRef<
  HTMLButtonElement,
  ToastPrimitive.ToastCloseProps
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close ref={ref} className={cn(styles.close, className)} aria-label="Close" {...props}>
    <CloseIcon />
  </ToastPrimitive.Close>
));
ToastClose.displayName = "ToastClose";

function CloseIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
