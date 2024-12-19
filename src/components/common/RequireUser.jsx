import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { Skeleton } from "../ui/skeleton";

function RequireUser({ children }) {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const location = useLocation();

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

  if (
    isAuthenticated &&
    user?.role !== "user" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  return <>{children}</>;
}

export default RequireUser;
