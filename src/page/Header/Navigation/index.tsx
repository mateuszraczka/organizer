interface NavigationProps {
    children: React.ReactNode;
    className?: string;
}

const Navigation = ({children, className=""}:NavigationProps) => {
  return (
    <nav className={className +" "+ "flex gap-4"}>
      {children}
    </nav>
  );
};
export default Navigation;
