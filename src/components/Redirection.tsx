interface RedirectionProps {
  children: React.ReactNode;
  redirectPath: string;
  condition?: boolean;
}

const Redirection = ({ // Redirect with page reload
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
