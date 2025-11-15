import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  variant = "default",
  ...props
}: {
  className?: string;
  variant?: "default" | "secondary" | "outline";
} & React.HTMLAttributes<HTMLDivElement>) {
  let styles = "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold";

  if (variant === "default") {
    styles += " bg-blue-600 text-white";
  } else if (variant === "secondary") {
    styles += " bg-gray-200 text-gray-800";
  } else if (variant === "outline") {
    styles += " border border-gray-400 text-gray-700 bg-transparent";
  }

  return <div className={cn(styles, className)} {...props} />;
}
