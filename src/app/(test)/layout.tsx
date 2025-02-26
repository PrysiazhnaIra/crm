import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div>there will be a layout info</div>
      <div className="ml-60">{children}</div>
    </>
  );
}
