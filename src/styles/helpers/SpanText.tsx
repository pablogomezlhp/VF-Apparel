import React from 'react';

interface Props {
  className?: string;
  fontSize?: string;
  color?: string;
  children: React.ReactNode;
}

export const SpanText = ({ className, children }: Props) => {
  return <span className={className}>{children}</span>;
};