import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const { isAuthenticated } = useAuth();

  console.log("PROTECTED ROUTE AUTH:", isAuthenticated); // 🔴 DEBUG

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
