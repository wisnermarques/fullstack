import React from "react";

const Botao = (props) => {
  return <button onClick={props.onClick}>{props.texto}</button>;
};

export default Botao;
