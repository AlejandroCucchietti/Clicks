import React from "react";
import "../hojas-style/button.css";
function Button({texto, esBotonDeClick, manejarClick}) {
  return (
    <button
      className={esBotonDeClick ? "boton-click" : "boton-reiniciar"}
      onClick={manejarClick}>
      {texto}
    </button>
  );
}

export default Button;