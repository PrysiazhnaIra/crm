import React from 'react';

export interface LoadingProps {}

export default function Loading({}: LoadingProps) {
  console.log('⏳ Loading Stats');
  return <div>Loading data...</div>;
}
