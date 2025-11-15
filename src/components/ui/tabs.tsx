import * as React from "react";
import { cn } from "@/lib/utils";

export function Tabs({ children, className }: any) {
  return <div className={cn("w-full", className)}>{children}</div>;
}

export function TabsList({ children, className }: any) {
  return <div className={cn("flex gap-2 border-b pb-2", className)}>{children}</div>;
}

export function TabsTrigger({ children, className, ...props }: any) {
  return (
    <button
      className={cn(
        "px-3 py-1 text-sm border rounded-md data-[active=true]:bg-blue-600 data-[active=true]:text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, className }: any) {
  return <div className={cn("mt-4", className)}>{children}</div>;
}
