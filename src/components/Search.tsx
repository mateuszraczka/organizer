import Input from "./Input"
import Button from "./Button"
import {MdOutlineSearch} from "react-icons/md"
const Search = () => {
    return (
        <section className="flex gap-4 justify-center p-2 w-fit border-2 border-gray-100 rounded-md">
            <Input type="text" variant="horizontal" placeholder="Szukaj"></Input>
            <Button variant="horizontal">
                <MdOutlineSearch className="text-2xl"/>
            </Button>
        </section>
    )
}
export default Search;