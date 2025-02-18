import React from 'react';
import styles from './pending.module.css';
export interface PendingProps {
  children: React.ReactNode; //цей проп дозволяє передавати будь-які дочірні елементи (string, JSX, інші компоненти тощо)
}

export default function Pending({ children }: PendingProps) {
  return <span className={styles.label}>{children}</span>;
}
