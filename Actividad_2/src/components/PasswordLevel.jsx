import { useState } from "react";

function PasswordLevel() {

    const [password, setPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("N/A")

    const checkPasswordStrength = () => {
        let strength = 0

        if (password.length >= 8) {
            strength += 1;
        }

        if (/\d/.test(password)) {
            strength += 1;
        }

        if (/[A-Z]/.test(password)) {
            strength += 1;
        }

        if (/[@#$%^&+=]/.test(password)) {
            strength += 1;
        }

        return strength;
    };

    const checkLevelStrength = () => {
        
        const strength = checkPasswordStrength();

        if (strength === 0) {
            return "Prueba con más"
        }

        if (strength === 1) {
            return "Débil";
        }

        if (strength >= 2 && strength <= 3) {
            return "Normal"
        }

        if (strength === 4) {
            return "Fuerte"
        }
    };

    return (
        <>
        <label>Password: </label>
        <input type="password"
        value={password}
        onChange={(e) => {
            setPassword(e.target.value);
            setPasswordStrength(checkLevelStrength());
        }}
        />
        <p>Strength: {passwordStrength}</p>
        </>
    );

}

export default PasswordLevel;