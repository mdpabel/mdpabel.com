import React, { ReactNode } from 'react';
import NextTopLoader from 'nextjs-toploader';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NextTopLoader color='#ad46ff' />
      {children}
    </>
  );
};

export default layout;
