import React from 'react';

export interface pageProps {
  children?: React.ReactNode;
}

export default function page({ children }: pageProps) {
  return (
    <main>
      <h1 className="text-xl">Dash Board Page</h1>
    </main>
  );
}
