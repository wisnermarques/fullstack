import React, { useState } from "react";

export default function ContaCliques() {
  const [cliques, setCliques] = useState({
    esquerda: 0,
    direita: 0,
  });

  const [todosOsCliques, setTodos] = useState([]);

  const [total, setTotal] = useState(0);

  const handleCliqueEsquerda = () => {
    setTodos(todosOsCliques.concat("E"));
    const atualizaEsquerda = cliques.esquerda + 1
    setCliques({ ...cliques, esquerda: atualizaEsquerda });
    setTotal(cliques.esquerda + cliques.direita);
  };

  const handleCliqueDireita = () => {
    setTodos(todosOsCliques.concat("R"));
    const atualizaDireita = cliques.direita + 1
    setCliques({ ...cliques, direita: atualizaDireita});
    setTotal(cliques.esquerda + cliques.direita);
  };

  return (
    <div>
      {cliques.esquerda}
      <button onClick={handleCliqueEsquerda}>Esquerda</button>
      <button onClick={handleCliqueDireita}>Direita</button>
      {cliques.direita}
      <p>{todosOsCliques.join(" ")}</p>
      <p>Total {total}</p>
    </div>
  );
}
