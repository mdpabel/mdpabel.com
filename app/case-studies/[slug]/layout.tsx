import React, { ReactNode } from 'react';
import ReadProgressBar from '@/components/reading-progress-bar';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ReadProgressBar />
      {children}
    </div>
  );
};

export default layout;
