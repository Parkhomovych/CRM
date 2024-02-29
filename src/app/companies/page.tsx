import React, { useEffect } from 'react';

export interface pageProps {
  children: React.ReactNode;
}

export default function page({ children }: pageProps) {


  return <div>{children}</div>;
}
