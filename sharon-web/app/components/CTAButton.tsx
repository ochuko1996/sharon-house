import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  target = "_self",
}: CTAButtonProps) {
  const baseStyles =
    "inline-block font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center";

  const variantStyles = {
    primary: "bg-[#6FAF2E] text-white hover:bg-[#5A9625]",
    secondary: "bg-[#3E6F1E] text-white hover:bg-[#2F5516]",
    accent: "bg-[#C62828] text-white hover:bg-[#A52020]",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <Link
      href={href}
      target={target}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
