import React, { Suspense } from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  stats: React.ReactNode;
  sales: React.ReactNode;
  categories: React.ReactNode;
  countries: React.ReactNode;
  promotions: React.ReactNode;
}

export default function Layout({
  children,
  stats,
  sales,
  categories,
  countries,
  promotions,
}: LayoutProps) {
  console.log('Stats prop:', stats);

  return (
    <div>
      {children}
      <main className="grid grid-cols-12 gap-5 py-10 pl-10 pr-7">
        <Suspense fallback={<div>Loading stats...</div>}>
          <div className="col-span-12">{stats}</div>
        </Suspense>
        <Suspense fallback={<div>Loading stats...</div>}>
          <div className="col-span-5">{sales}</div>
        </Suspense>
        <Suspense fallback={<div>Loading stats...</div>}>
          <div className="col-span-7">{categories}</div>
        </Suspense>
        <Suspense fallback={<div>Loading stats...</div>}>
          <div className="col-span-6">{countries}</div>
        </Suspense>
        <Suspense fallback={<div>Loading stats...</div>}>
          <div className="col-span-6">{promotions}</div>
        </Suspense>
      </main>
    </div>
  );
}
