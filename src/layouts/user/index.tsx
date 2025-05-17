import FooterMain from '@/components/sections/footer';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <FooterMain />
    </div>
  );
};

export default UserLayout;
