import { headers } from 'next/headers';
import React from 'react';

export interface ServerComponentCopyProps {
  children?: React.ReactNode;
}

export default function ServerComponentCopy({
  children,
}: ServerComponentCopyProps) {
  console.log('Server Component copy');
  console.log(headers());

  return (
    <div>
      {children}
      <span>Server Component copy</span>
    </div>
  );
}
