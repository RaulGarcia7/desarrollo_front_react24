import PropTypes from "prop-types"
import { useState } from "react";

function ShowPassword({}){

    const [showPassword, setShowPassword] = useState(false);

    return(
        <>
            <input type={showPassword ? "text" : "password"} placeholder="Contraseña" />
            <button onClick={() => setShowPassword(!showPassword)}>
            Mostrar contraseña</button>
        </>    
    );

}

ShowPassword.propTypes = {
    showPassword: PropTypes.bool.isRequired,
    setShowPassword: PropTypes.bool
};

export default ShowPassword


