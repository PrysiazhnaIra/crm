'use client';

import AddCompanyButton from './components/add-company-button';
import React from 'react';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
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
