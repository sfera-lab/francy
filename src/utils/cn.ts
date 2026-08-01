import clsx, { type ClassValue } from "clsx";

/**
 * Merges a component's own module classes with any consumer-supplied
 * `className`, so every component stays fully overridable.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
