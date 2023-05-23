interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    type: "text" | "password" | "email" | "number" | "date";
    variant: "horizontal" | "vertical";
    className?: string;
}

const variants = {
    horizontal: "flex flex-row items-center justify-center",
    vertical: "flex flex-col items-center justify-center",
}

const Input = ({className="", variant, ...props}: InputProps) => {
    const currentVariant = variant === "horizontal" ? variants.horizontal : variants.vertical;
    return (
        <input className={className +" "+ currentVariant + " w-full"} {...props}/>
    )
}
export default Input;