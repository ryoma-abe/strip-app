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
    <div>
      <div>
        <h2>{title}</h2>
        {description && description}
        {children}
      </div>
    </div>
  );
}
