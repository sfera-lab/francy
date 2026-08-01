import { useEffect, useState, type ReactNode } from "react";
import type { ToastVariant } from "./Toast";

export interface ToastOptions {
  title?: ReactNode;
  description?: ReactNode;
  variant?: ToastVariant;
  duration?: number;
}

export interface ToastRecord extends ToastOptions {
  id: string;
  open: boolean;
}

type Listener = (toasts: ToastRecord[]) => void;

let toasts: ToastRecord[] = [];
const listeners = new Set<Listener>();

function emit() {
  for (const listener of listeners) listener(toasts);
}

function dismiss(id: string) {
  toasts = toasts.map((t) => (t.id === id ? { ...t, open: false } : t));
  emit();
}

function remove(id: string) {
  toasts = toasts.filter((t) => t.id !== id);
  emit();
}

/** Imperatively queue a toast from anywhere — no hook required. */
export function toast(options: ToastOptions) {
  const id = crypto.randomUUID();
  toasts = [...toasts, { ...options, id, open: true }];
  emit();
  return { id, dismiss: () => dismiss(id) };
}

/** Subscribes a component (typically `<Toaster />`) to the active toast queue. */
export function useToast() {
  const [state, setState] = useState(toasts);

  useEffect(() => {
    listeners.add(setState);
    return () => {
      listeners.delete(setState);
    };
  }, []);

  return { toasts: state, toast, dismiss, remove };
}
