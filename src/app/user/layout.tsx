import UserLayout from '@/layouts/user';

const UserRouteLayout = ({ children }: { children: React.ReactNode }) => {
  return <UserLayout>{children}</UserLayout>;
};

export default UserRouteLayout;
