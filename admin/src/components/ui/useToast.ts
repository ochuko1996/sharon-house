import { useContext } from "react";
import { ToastContext, type Toast } from "./ToastContext";

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }

  return {
    toast: (options: Omit<Toast, "id">) => {
      return context.addToast(options);
    },
    success: (message: string, title?: string) => {
      return context.addToast({ type: "success", message, title });
    },
    error: (message: string, title?: string) => {
      return context.addToast({ type: "error", message, title });
    },
    info: (message: string, title?: string) => {
      return context.addToast({ type: "info", message, title });
    },
    warning: (message: string, title?: string) => {
      return context.addToast({ type: "warning", message, title });
    },
    remove: context.removeToast,
  };
}
