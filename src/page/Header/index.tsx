import Navigation from "./Navigation/index";
import Logo from "./Logo";
import Burger from "./Burger";
const Header = () => {
  return (
    <header className="flex items-center gap-10 select-none shadow-md p-2">
      <Navigation className="flex w-full justify-between gap-12">
        <Logo></Logo>
        <Burger></Burger>
      </Navigation>
    </header>
  );
};
export default Header;
