import React from "react";

const Botao = ({ onClick, texto }) => (
  <button onClick={onClick}>{texto}</button>
);

export default Botao;
