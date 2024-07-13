import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { lazy, LazyExoticComponent, ComponentType } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const LazyWithDelay = <T extends ComponentType>(
  importFunction: () => Promise<{ default: T }>,
  delay: number
): LazyExoticComponent<T> => {
  return lazy(() => {
    return new Promise<{ default: T }>((resolve) => {
      setTimeout(() => {
        resolve(importFunction());
      }, delay);
    });
  });
};
