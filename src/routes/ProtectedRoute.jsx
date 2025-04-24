// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

// This is a placeholder for checking if the user is authenticated
const isAuthenticated = true;  // Change this to actual auth check logic

const ProtectedRoute = ({ element }) => {
  return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;