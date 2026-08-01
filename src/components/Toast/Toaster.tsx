import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./Toast";
import { useToast } from "./useToast";

/** Mount once near the root of your app to render queued `toast()` calls. */
export function Toaster() {
  const { toasts, dismiss, remove } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, variant, duration, open }) => (
        <Toast
          key={id}
          variant={variant}
          open={open}
          duration={duration ?? 5000}
          onOpenChange={(nextOpen) => {
            if (nextOpen) return;
            dismiss(id);
            setTimeout(() => remove(id), 200);
          }}
        >
          {title ? <ToastTitle>{title}</ToastTitle> : null}
          {description ? <ToastDescription>{description}</ToastDescription> : null}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
