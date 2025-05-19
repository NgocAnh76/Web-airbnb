import { DashboardAdmin } from '@/components/common/dashboard';
import HeaderAdmin from '@/components/common/header/headerAdmin';
import FooterAdmin from '@/components/sections/footer-admin';

import React from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderAdmin />
      <div className="flex flex-1">
        <div className="hidden min-h-full bg-gray-800 lg:block lg:w-1/5">
          <DashboardAdmin />
        </div>
        <div className="h-full lg:hidden"></div>
        <main className="w-full lg:w-4/5 lg:pl-10">{children}</main>
      </div>
      <FooterAdmin />
    </div>
  );
};

export default AdminLayout;
