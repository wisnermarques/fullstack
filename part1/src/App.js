import React from "react";
import Hello from "./Hello";
import Footer from "./Footer";
import Contador from "./Contador";
import ContaCliques from "./ContaCliques";

const App = () => {
  const hoje = new Date().toLocaleString();
  const a = 10;
  const b = 20;
  console.log(hoje, a + b);

  const nome = "Peter";
  const idade = 10;

  return (
    <div>
      <h1>Olá a todos!</h1>
      <Hello nome="Mya" idade={26 + 10} />
      <Hello nome={nome} idade={idade} />
      <Hello nome="Wisner" idade={43} />
      <Footer />
      <hr />
      <Contador />
      <hr />
      <ContaCliques />
    </div>
  );
};

export default App;
