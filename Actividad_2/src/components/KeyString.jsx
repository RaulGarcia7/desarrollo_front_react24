import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function KeyString({ keyMessage }) {
  const [userMessage, setUserMessage] = useState("");
  let checkTime;

  const inputChange = (event) => {
    setUserMessage(event.target.value);

    if (checkTime) {
      clearTimeout(checkTime);
    }
    
    checkTime = setTimeout(() => {}, 3000);
  };

  useEffect(() => {
    const checkMessage = () => {
      if (userMessage.trim() !== "" && keyMessage !== userMessage) {
        alert("¡Mensaje incorrecto!");
        console.log("Error");
      }
    };
    checkTime = setTimeout(checkMessage, 3000);

    return () => clearTimeout(checkTime);
  }, [userMessage, keyMessage]);

  return (
    <input
      type="text"
      placeholder="¿Cómo estamos con React?"
      value={userMessage}
      onChange={inputChange}
    />
  );
}

KeyString.propTypes = {
  keyMessage: PropTypes.string.isRequired,
};

export default KeyString;
