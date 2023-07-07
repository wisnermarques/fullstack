import React from "react";

const Persons = ({ persons, removePerson }) => {
  return persons.map((person) => (
    <div key={person.name}>
      <p>
        {person.name} {person.number}{" "}
        <input
          type="button"
          value="delete"
          onClick={() => removePerson(person)}
        />
      </p>
    </div>
  ));
};

export default Persons;
