import React from "react";

type PageHeaderProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function PageHeader({
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <div className="relative space-y-2">
      <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-50 blur-2xl" />
      <h2 className="relative text-3xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
        {title}
      </h2>
      {description && (
        <p className="relative text-muted-foreground/90">{description}</p>
      )}
      {children}
    </div>
  );
}
