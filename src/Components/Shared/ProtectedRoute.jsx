import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) navigate("/login"); //AUTHENTICATON
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? children : null;
}
export default ProtectedRoute;
