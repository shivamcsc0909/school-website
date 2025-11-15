import * as React from "react";
import { cn } from "@/lib/utils";

export function Tabs({
  defaultValue,
  onValueChange,
  children,
  className,
}: {
  defaultValue: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (v: string) => {
    setValue(v);
    onValueChange?.(v);
  };

  return (
    <TabsContext.Provider value={{ value, setValue: handleChange }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

const TabsContext = React.createContext<any>(null);

export function TabsList({ children, className }: any) {
  return (
    <div className={cn("flex gap-2 border-b pb-2", className)}>
      {children}
    </div>
  );
}

export function TabsTrigger({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = React.useContext(TabsContext);
  const active = ctx.value === value;

  return (
    <button
      onClick={() => ctx.setValue(value)}
      className={cn(
        "px-3 py-1 text-sm border rounded-md",
        active
          ? "bg-blue-600 text-white"
          : "bg-white text-black hover:bg-muted",
        className
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = React.useContext(TabsContext);

  if (ctx.value !== value) return null;

  return <div className={cn("mt-4", className)}>{children}</div>;
}
