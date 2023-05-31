import Input from "./Input"
import Button from "./Button"
import {MdOutlineSearch} from "react-icons/md"

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement>{
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const Search = ({handleInput, value}:SearchProps) => {
    return (
        <section className="flex gap-4 justify-center p-2 w-fit border-2 border-gray-100 rounded-md">
            <Input type="text" placeholder="Szukaj" value={value} onChange={handleInput}></Input>
            <Button variant="horizontal">
                <MdOutlineSearch className="text-2xl"/>
            </Button>
        </section>
    )
}
export default Search;