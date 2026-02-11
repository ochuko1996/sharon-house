import { useState, useCallback, type ReactNode } from "react";
import { AlertCircle, CheckCircle, Info, XCircle, X } from "lucide-react";
import { ToastContext, type Toast } from "./ToastContext";

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (toast: Omit<Toast, "id">) => {
      const id = Math.random().toString(36).substr(2, 9);
      const newToast: Toast = { ...toast, id };

      setToasts((prev) => [...prev, newToast]);

      if (toast.duration !== 0) {
        setTimeout(() => {
          removeToast(id);
        }, toast.duration || 5000);
      }

      return id;
    },
    [removeToast],
  );

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
}

// Export context for the hook
export { ToastContext };

function ToastContainer({
  toasts,
  onRemove,
}: {
  toasts: Toast[];
  onRemove: (id: string) => void;
}) {
  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  );
}

function ToastItem({
  toast,
  onRemove,
}: {
  toast: Toast;
  onRemove: (id: string) => void;
}) {
  const styles = {
    info: {
      bg: "bg-blue-50 border border-blue-200",
      icon: Info,
      iconColor: "text-blue-500",
      titleColor: "text-blue-900",
      textColor: "text-blue-800",
    },
    success: {
      bg: "bg-green-50 border border-green-200",
      icon: CheckCircle,
      iconColor: "text-green-500",
      titleColor: "text-green-900",
      textColor: "text-green-800",
    },
    warning: {
      bg: "bg-yellow-50 border border-yellow-200",
      icon: AlertCircle,
      iconColor: "text-yellow-500",
      titleColor: "text-yellow-900",
      textColor: "text-yellow-800",
    },
    error: {
      bg: "bg-red-50 border border-red-200",
      icon: XCircle,
      iconColor: "text-red-500",
      titleColor: "text-red-900",
      textColor: "text-red-800",
    },
  };

  const config = styles[toast.type];
  const Icon = config.icon;

  return (
    <div
      className={`${config.bg} rounded-lg p-4 max-w-sm flex items-start gap-3 shadow-lg animate-in slide-in-from-right-full`}
    >
      <Icon className={`${config.iconColor} w-5 h-5 flex-shrink-0 mt-0.5`} />
      <div className="flex-1">
        {toast.title && (
          <h4 className={`font-medium ${config.titleColor}`}>{toast.title}</h4>
        )}
        <p
          className={`${config.textColor} ${toast.title ? "text-sm mt-1" : ""}`}
        >
          {toast.message}
        </p>
      </div>
      <button
        onClick={() => onRemove(toast.id)}
        className={`${config.iconColor} hover:opacity-70 transition-opacity flex-shrink-0`}
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
