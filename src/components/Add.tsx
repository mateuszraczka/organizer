import Button from "./Button";
import {MdAddBox} from "react-icons/md";

interface AddProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children?: React.ReactNode;
}

const Add = ({children, ...props}:AddProps) => {
    return (
        <Button variant="horizontal" className={"rounded-lg bg-green-400 p-1 hover:bg-green-300 flex gap-1"} {...props}>
            <MdAddBox className="text-xl"></MdAddBox>
        </Button>
    )
}
export default Add;