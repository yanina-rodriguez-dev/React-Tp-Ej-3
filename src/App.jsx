import React, { useState } from 'react';
import Titulos from './components/Titulos';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleClickMostrarMensaje = () => {
    setMostrarMensaje(true);
  };

  return (
    <section  className="container">
      <Titulos mostrarMensaje={mostrarMensaje} />
      <button onClick={handleClickMostrarMensaje} className="btn btn-success mt-5 ms-4">
        Mostrar Mensaje
      </button>
    </section>
  );
}

export default App;


