export const dynamic = 'force-static';

import UnderDevelopment from '@/components/under-development';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  robots: {
    index: false,
  },
};

const page = () => {
  return <UnderDevelopment />;
};

export default page;
