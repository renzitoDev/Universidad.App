
import { Navigate, Outlet } from "react-router-dom"; // ✅ IMPORTAR OUTLET
import { useAuth } from "../context/AuthContext";


const PrivateRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  console.log("🔒 PrivateRoute user:", user);
  console.log("🔑 AllowedRoles:", allowedRoles);

  if (!user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(user.rol)) {
    alert("🚫 No tienes permiso para acceder a esta sección");
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
