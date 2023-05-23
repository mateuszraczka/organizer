import { Navigate } from "react-router-dom";

interface ProtectionRouteProps {
  user: string | null;
  children: React.ReactNode;
  redirectPath?: string;
}

const ProtectionRoute = ({
  user,
  children,
  redirectPath = "/login",
}: ProtectionRouteProps) => {
    if (user === null) {
        return <Navigate to={redirectPath} />;
    }
    return <>{children}</>;
};
export default ProtectionRoute;
