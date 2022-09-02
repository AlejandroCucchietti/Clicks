import React from "react";
import "../hojas-style/contador.css"

function Contador({ numClicks }) {
  return(
    <div className="contador">
      {numClicks}
    </div>
  );
}

export default Contador;