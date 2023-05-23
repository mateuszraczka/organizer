interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
    children: React.ReactNode;
}

const Select = ({children, ...props}:SelectProps) => {
    return (
        <select {...props}>
            {children}
        </select>
    );
};

export default Select;