export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="relative h-screen min-h-screen overflow-y-auto">
        <div
          className="fixed inset-0 -z-20 h-full w-full"
          style={{
            backgroundImage: `url("/images/banner/banner-1.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="fixed inset-0 -z-10 h-full w-full bg-black/50 backdrop-blur-md"></div>
        <div className="relative z-10 flex h-full min-h-screen items-center justify-center">
          {children}
        </div>
      </main>
    </>
  );
}
