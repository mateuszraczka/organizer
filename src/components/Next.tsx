import Button from "./Button";
import { AiFillLock } from "react-icons/ai";
import { AiFillUnlock } from "react-icons/ai";

interface NextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const Next = ({ active, ...props }: NextProps) => {
  return (
    <Button
      className={`p-3 ${
        active
          ? "bg-green-400 hover:bg-green-300 animate-pulse"
          : "bg-slate-300 hover:bg-red-500 cursor-not-allowed"
      } bg-green-400 hover:bg-green-300 rounded-md h-fit`}
      variant="horizontal"
      {...props}
    >
      {active ? (
        <div className="flex gap-2">
          <AiFillUnlock className="text-2xl"></AiFillUnlock>Przejdź dalej
        </div>
      ) : (
        <div className="flex gap-2">
          <AiFillLock className="text-2xl"></AiFillLock>Przejdź dalej
        </div>
      )}
    </Button>
  );
};
export default Next;
