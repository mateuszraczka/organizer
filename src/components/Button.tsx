import React, { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    variant: "horizontal" | "vertical";
}

const variants = {
    horizontal: "flex flex-row items-center justify-center",
    vertical: "flex flex-col items-center justify-center",
}

const Button = forwardRef(({ children, variant, className = "", ...props }:ButtonProps, ref) => {
    const currentVariant = variant === "horizontal" ? variants.horizontal : variants.vertical;
    return (
        <button ref={()=>ref} {...props} className={className +" transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-100 font-bold "+currentVariant}>
            {children}
        </button>
    )
})
export default Button;