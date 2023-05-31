interface NavigationProps {
    children: React.ReactNode;
    className?: string;
}

const Navigation = ({children, className=""}:NavigationProps) => {
  return (
    <nav className={className +" "+ "flex gap-4 items-center"}>
      {children}
    </nav>
  );
};
export default Navigation;
