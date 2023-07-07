import React, { useEffect, useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    console.log("effect (efeito)");
    personService.getAll().then((data) => {
      setPersons(data);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    if (!newName || !newNumber) {
      alert("Nome ou número não informado!");
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      const existingPerson = persons.find((person) => person.name === newName);

      if (existingPerson) {
        const confirmUpdate = window.confirm(
          `${existingPerson.name} já existe na lista telefônica. Deseja atualizar o número?`
        );

        if (confirmUpdate) {
          personService.update(existingPerson.id, personObject).then((data) => {
            setPersons(
              persons.map((person) => (person.id === data.id ? data : person))
            );
            setNewName("");
            setNewNumber("");
            setSuccessMessage(
              `${personObject.name} teve o número atualizado com sucesso!`
            );
            setTimeout(() => {
              setSuccessMessage(null);
            }, 5000);
          });
        }
      } else {
        personService.create(personObject).then((data) => {
          setPersons([...persons, data]);
          setNewName("");
          setNewNumber("");

          setSuccessMessage(
            `${personObject.name} foi adicionado com sucesso!`
          );
          setTimeout(() => {
            setSuccessMessage(null);
          }, 5000);
        });
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

  const removePerson = (person) => {
    const confirmDelete = window.confirm(`Delete ${person.name}?`);
    if (confirmDelete) {
      personService.remove(person.id).then(() => {
        setPersons(persons.filter((p) => p.id !== person.id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      {successMessage && <Notification message={successMessage} />}
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} removePerson={removePerson} />
    </div>
  );
};

export default App;
