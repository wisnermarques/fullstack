import React, { useState } from "react";
import Exibir from "./Exibir";
import Botao from "./Botao";

export default function Contador() {
  const [contador, setContador] = useState(0);

  const aumentarEmUm = () => setContador(contador + 1);

  const zerarContador = () => setContador(0);

  const diminuirEmUm = () => setContador(contador - 1);
  return (
    <div>
      <Exibir contador={contador} />
      <Botao onClick={aumentarEmUm} texto="mais+" />
      <Botao onClick={zerarContador} texto="zerar" />
      <Botao onClick={diminuirEmUm} texto="menos-" />
    </div>
  );
}
