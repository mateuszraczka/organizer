import Button from "./Button";
import { MdSave } from "react-icons/md";
const Save = ({...props}) => {
  return (
    <Button
      variant="horizontal"
      className="gap-2 bg-green-400 hover:bg-green-300 p-2 rounded-md"
      {...props}
    >
      <MdSave className="text-xl"></MdSave>
      <span>Zapisz</span>
    </Button>
  );
};
export default Save;
