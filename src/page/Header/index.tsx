import Navigation from "./Navigation/index"
import { AiOutlineBook } from "react-icons/ai";
const Header = () => {
    return (
        <header className="flex items-center gap-20 select-none">
            <div className="flex gap-1">
                <AiOutlineBook className="text-3xl"/>
                <h1>Exam Organizer</h1>
            </div>
            <Navigation></Navigation>
        </header>
    )
}
export default Header;