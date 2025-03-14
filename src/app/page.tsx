'use client';

import AddCompanyButton from './components/add-company-button';
import React from 'react';

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline text-green-500">
        {/* Hello, Next.js! This is a Home Page {new Date().toTimeString()} */}
      </h1>
      <details>
        <summary>Click me!</summary>
        <div>
          <h2>Мій календар</h2>
        </div>
      </details>

      <AddCompanyButton />
    </main>
  );
}
