import React from 'react';

const Titulos = ({ mostrarMensaje }) => {
  const msj = "(from changed state)";

  return (
    <section className="container">
      <h1 className="mt-5">My friend {mostrarMensaje && msj}</h1>
    </section>
  );
};

export default Titulos;
