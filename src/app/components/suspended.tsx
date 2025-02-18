import React from 'react';
import styles from './suspended.module.css';

export interface SuspendedProps {
  children: React.ReactNode;
}
export default function Suspended({ children }: SuspendedProps) {
  return <span className={styles.label}>{children}</span>;
}
