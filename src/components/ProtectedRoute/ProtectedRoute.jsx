import { Navigate } from "react-router";
import { loginData } from "../../store/modalstore";

export default function ProtectedRoute({children}){
    const TOKEN = loginData((state)=>state.token);

    if(!TOKEN){
        return <Navigate to="/signin" replace />
    }

    return children;
}