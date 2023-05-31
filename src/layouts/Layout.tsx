interface LayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}
const Layout = ({ header, children}: LayoutProps) => {
  return (
    <div className="grid grid-rows-[1fr_9fr] h-screen">
      {header}
      <main className="flex flex-col gap-4 shadow-md p-5 overflow-y-scroll">
        {children}
      </main>
    </div>
  );
};
export default Layout;
