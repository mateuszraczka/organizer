import { AiOutlineBook } from "react-icons/ai";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/" className="flex gap-1 justify-center items-center">
      <AiOutlineBook className="text-3xl" />
      <h1 className="font-bold">Organizer</h1>
    </Link>
  );
};
export default Logo;
