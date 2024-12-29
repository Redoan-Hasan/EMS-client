import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { Navigate } from "react-router";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    // const navigate = useNavigate();
    const { user , loading} = useContext(AuthContext);
        if(loading){
            return  <span className="loading loading-bars loading-lg flex justify-center items-center h-screen mx-auto"></span>
        }
        if(user){
            return children;
        }
        else{
            return  <Navigate to="/" />
        }
};

export default PrivateRoute;