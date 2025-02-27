import React from 'react';

export interface DashboardCardProps {
  label: React.ReactNode;
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function DashboardCard({
  label,
  children,
  backgroundColor = 'bg-gray-100',
}: DashboardCardProps) {
  return (
    <div className={`rounded ${backgroundColor} bg-gray-100 w-full h-full`}>
      <p className="p-5 text-xl	text-gray-900 font-medium">{label}</p>
      <div>{children}</div>
    </div>
  );
}
