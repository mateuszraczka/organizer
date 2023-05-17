import Navigation from "./Navigation/index";
import {
  MdOutlineLibraryBooks,
  MdOutlineGroup,
} from "react-icons/md";
import Button from "../../components/Button";
import Logo from "./Logo";
const Header = () => {
  const handleButtonClick = (name: string) => {
    switch (name) {
      case "exams":
        break;
      case "classes":
        break;
      default:
        break;
    }
  };

  return (
    <header className="flex items-center gap-10 select-none shadow-md p-2">
      <Logo></Logo>
      <Navigation>
        <Button variant="horizontal" name="exams" className="flex gap-1 p-2">
          <MdOutlineLibraryBooks />
          <span>Sprawdziany</span>
        </Button>
        <Button variant="horizontal" name="classes" className="flex gap-1 p-2">
          <MdOutlineGroup />
          <span>Klasy</span>
        </Button>
      </Navigation>
    </header>
  );
};
export default Header;
