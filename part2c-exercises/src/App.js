import React, { useEffect, useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("effect (efeito)");
    fetch("http://localhost:3001/persons", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("promise fulfilled (promessa resolvida)");
        setPersons(data);
      });
  }, []);
  console.log("render (renderiza)", persons.length, "persons (pessoas)");

  const addPerson = (event) => {
    event.preventDefault();

    if (!newName || !newNumber) {
      alert("Nome ou número não informado!");
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      const existName = persons.find((person) => person.name === newName);
      if (existName) {
        alert(`${personObject.name} já foi adicionado à lista telefônica!`);
      } else {
        setPersons(persons.concat(personObject));
        setNewName("");
        setNewNumber("");
      }
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const filteredPersons = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
