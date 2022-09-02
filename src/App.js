
import './App.css';
import Button from "./componentes/Button";
import Contador from "./componentes/contador";
import VestlaLogo from "./imagenes/VestlaLogoWeb.png";
import { useState } from "react";

function App() {

  const [numClicks,setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };
  const reiniciarContador = () => {
    setNumClicks(0);
  };
  return (
    <div className="App">
      <div className="vestla-logo-contenedor">
        <img
        className="vestla-logo"
        src={VestlaLogo}
        alt= "Logo de Vestla" />
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks} />
        <Button 
        texto="Click"
        esBotondeClick={true}
        manejarClick={manejarClick} />
        <Button
        texto="Reiniciar"
        esBotondeClick={false}
        manejarClick={reiniciarContador} />
      </div>
     
    </div>
  );
}

export default App;
