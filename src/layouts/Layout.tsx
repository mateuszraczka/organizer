interface LayoutProps {
  header: React.ReactNode;
  main: React.ReactNode;
  footer: React.ReactNode;
}
const Layout = ({ header, main, footer }: LayoutProps) => {
  return (
    <div className="grid grid-rows-[1fr_8fr_1fr] h-screen">
      {header}
      {main}
      {footer}
    </div>
  );
};
export default Layout;
