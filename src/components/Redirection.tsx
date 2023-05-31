interface RedirectionProps {
  children: React.ReactNode;
  redirectPath: string;
  condition?: boolean;
}

const Redirection = ({
  redirectPath,
  condition,
  children,
}: RedirectionProps) => {
    if (condition) {
        window.location.href = redirectPath;
    }
    return <>{children}</>;
};
export default Redirection;
