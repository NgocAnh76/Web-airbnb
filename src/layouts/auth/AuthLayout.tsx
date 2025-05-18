export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex-box relative h-full min-h-screen w-full">
        <div
          className="absolute inset-0 -z-20 h-full w-full"
          style={{
            backgroundImage: `url("/images/banner/banner-1.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-black/80"></div>
        {children}
      </main>
    </>
  );
}
