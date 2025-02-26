'use client';

import Link from 'next/link';
import React from 'react';

export interface NotFoundProps {}
export default function NotFound({}: NotFoundProps) {
  return (
    <div>
      <p>Company not found</p>
      <Link href="/companies" className="bg-blue-700 text-white">
        Go back to all companies
      </Link>
    </div>
  );
}
