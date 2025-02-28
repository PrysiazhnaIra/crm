'use client';
import React from 'react';

export interface ErrorComponentProps {
  error: Error;
}
export default function ErrorComponent({ error }: ErrorComponentProps) {
  console.error('Stats error:', error);
  return <div>Unexpected error onside slot stats</div>;
}
