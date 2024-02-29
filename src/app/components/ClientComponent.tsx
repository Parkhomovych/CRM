'use client';

import React from 'react';

export interface ClientComponentProps {
  children?: React.ReactNode;
}

export default function ClientComponent({ children }: ClientComponentProps) {
  console.log('ClientComponent');
  return (
    <div>
      {children}
      <span>ClientComponent</span>
    </div>
  );
}
