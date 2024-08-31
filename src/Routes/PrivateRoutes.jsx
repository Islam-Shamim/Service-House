import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    if(loading){
        <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }
    return <Navigate to="/" replace></Navigate>;
};
PrivateRoutes.propTypes = {
    children: PropTypes.object
  };

export default PrivateRoutes;
