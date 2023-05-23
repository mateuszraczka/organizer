interface SubPageTitleProps extends React.HTMLAttributes<HTMLHeadingElement>{
    children: React.ReactNode;
}

const SubPageTitle = ({children, ...props}:SubPageTitleProps) =>{
    return (
        <h2 className="font-bold text-lg" {...props}>
            {children}
        </h2>
    )
}
export default SubPageTitle;