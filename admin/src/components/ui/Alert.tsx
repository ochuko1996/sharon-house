import { AlertCircle, CheckCircle, Info, XCircle, X } from "lucide-react";

interface AlertProps {
  type?: "info" | "success" | "warning" | "error";
  title?: string;
  message: string;
  onClose?: () => void;
  closeable?: boolean;
}

export default function Alert({
  type = "info",
  title,
  message,
  onClose,
  closeable = true,
}: AlertProps) {
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

  const config = styles[type];
  const Icon = config.icon;

  return (
    <div className={`${config.bg} rounded-lg p-4 flex items-start gap-4`}>
      <Icon className={`${config.iconColor} w-5 h-5 flex-shrink-0 mt-0.5`} />
      <div className="flex-1">
        {title && (
          <h3 className={`font-medium ${config.titleColor}`}>{title}</h3>
        )}
        <p className={`${config.textColor} ${title ? "mt-1 text-sm" : ""}`}>
          {message}
        </p>
      </div>
      {closeable && onClose && (
        <button
          onClick={onClose}
          className={`${config.iconColor} hover:opacity-70 transition-opacity flex-shrink-0`}
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
