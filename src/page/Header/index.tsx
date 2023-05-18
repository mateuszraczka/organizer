import Navigation from "./Navigation/index";
import { MdOutlineLibraryBooks, MdOutlineGroup } from "react-icons/md";
import Button from "../../components/Button";
import Logo from "./Logo";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex items-center gap-10 select-none shadow-md p-2">
      <Logo></Logo>
      <Navigation>
        <Link to="/exams">
          <Button variant="horizontal" name="exams" className="flex gap-1 p-2">
            <MdOutlineLibraryBooks />
            <span>Sprawdziany</span>
          </Button>
        </Link>
        <Link to="/classes">
          <Button
            variant="horizontal"
            name="classes"
            className="flex gap-1 p-2"
          >
            <MdOutlineGroup />
            <span>Klasy</span>
          </Button>
        </Link>
      </Navigation>
    </header>
  );
};
export default Header;
