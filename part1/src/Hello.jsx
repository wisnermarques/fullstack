import React from "react";

export default function Hello({ nome, idade }) {
  const anoDeNascimento = () => new Date().getFullYear() - idade;
  return (
    <div>
      <p>
        Olá {nome}, você tem {idade} anos.
      </p>
      <p>Então, você provavelmente nasceu em {anoDeNascimento()}.</p>
    </div>
  );
}
