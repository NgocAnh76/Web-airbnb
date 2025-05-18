import React from 'react';

import MainHeader from '@/components/sections/header';
import FooterMain from '@/components/sections/footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <FooterMain />
    </>
  );
};

export default MainLayout;
