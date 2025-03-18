import React from 'react';
import { getSummaryStats, SummaryStats } from '@/lib/api';
import Link from 'next/link';
import StatCard, { StatCardType } from '@/app/components/start-card';

export interface PageProps {}

const labelByStat: Record<keyof SummaryStats, string> = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

export default async function Page({}: PageProps) {
  console.log('💡 Stats Page Rendered');

  const data = await getSummaryStats();

  console.log('📊 Stats Data:', data);

  getSummaryStats().then((data) => console.log('📊 Data from Layout:', data));

  return (
    <div className="grid grid-cols-12 gap-5">
      {(Object.keys(labelByStat) as (keyof typeof data)[]).map((key) => (
        <Link href={`/dashboard/${key}`} key={key} className="col-span-3">
          <StatCard
            type={StatCardType.Gradient}
            label={labelByStat[key]}
            counter={data[key]}
          />
        </Link>
      ))}

      {Object.entries(data).map(([key, value]) => (
        <Link href={`/dashboard/${key}`} key={key} className="col-span-3">
          <StatCard
            type={StatCardType.Gradient}
            label={key}
            counter={value as number}
          />
        </Link>
      ))}
    </div>
  );
}
