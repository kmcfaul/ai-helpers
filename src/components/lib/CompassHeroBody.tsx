import React from "react";

interface CompassHeroBodyProps {
  children?: React.ReactNode;
  className?: string;
}

export const CompassHeroBody: React.FunctionComponent<CompassHeroBodyProps> = ({
  children,
  className,
}) => {
  const combinedClassName = className
    ? `compass__hero-body ${className}`
    : "compass__hero-body";

  return <div className={combinedClassName}>{children}</div>;
};
