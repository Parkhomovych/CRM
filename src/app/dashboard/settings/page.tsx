import React from 'react';

export interface pageProps {
  children?: React.ReactNode;
}

export default function page({ children }: pageProps) {
  return (
    <main>
      <h1 className="text-xl">Setting Page</h1>
    </main>
  );
}
