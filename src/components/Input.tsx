interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    type: "text" | "password" | "email" | "number" | "date" | "radio";
    className?: string;
}

const Input = ({className="", type, ...props}: InputProps) => {
    const isRadio = type === "radio";
    return (
        <input className={className +" bg-transparent"+(isRadio?"":" w-full")} {...props} type={type}/>
    )
}
export default Input;