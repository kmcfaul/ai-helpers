import React from "react";

interface CompassHeroProps {
  children?: React.ReactNode;
  className?: string;
}

export const CompassHero: React.FunctionComponent<CompassHeroProps> = ({
  children,
  className,
}) => {
  const combinedClassName = className
    ? `compass__hero ${className}`
    : "compass__hero";

  return <div className={combinedClassName}>{children}</div>;
};
