interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    variant: "horizontal" | "vertical";
}

const variants = {
    horizontal: "flex flex-row items-center justify-center",
    vertical: "flex flex-col items-center justify-center",
}

const Button = ({ children, variant, className = "", ...props }:ButtonProps) => {
    const currentVariant = variant === "horizontal" ? variants.horizontal : variants.vertical;
    return (
        <button {...props} className={className +" "+currentVariant}>
            {children}
        </button>
    )
}
export default Button;