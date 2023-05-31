interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
    children: React.ReactNode;
}

const Select = ({children, ...props}:SelectProps) => {
    return (
        <select {...props} className="bg-transparent">
            {children}
        </select>
    );
};

export default Select;