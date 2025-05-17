import { DashboardAdmin } from '@/components/common/dashboard';
import HeaderAdmin from '@/components/common/header/headerAdmin';
import FooterAdmin from '@/components/sections/footer-admin';

import React from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderAdmin />
      <div className="flex-box w-full items-start lg:gap-10">
        <div className="hidden min-h-[calc(100vh-120px)] bg-gray-800 lg:block lg:w-1/5">
          <DashboardAdmin />
        </div>
        <div className="min-h-[calc(100vh-120px)] lg:hidden"></div>
        <div className="w-full lg:w-4/5">{children}</div>
      </div>

      <FooterAdmin />
    </>
  );
};

export default AdminLayout;
