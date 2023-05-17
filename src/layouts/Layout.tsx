interface LayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}
const Layout = ({ header, children, footer }: LayoutProps) => {
  return (
    <div className="grid grid-rows-[1fr_8fr_1fr] h-screen">
      {header}
      <main className="flex flex-col gap-4 shadow-md p-5 overflow-y-scroll">
        {children}
      </main>
      {footer}
    </div>
  );
};
export default Layout;
