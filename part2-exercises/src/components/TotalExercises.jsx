import React from "react";

const TotalExercises = ({ parts }) => {
  const total = parts.reduce((accumulator, part) => {
    return accumulator + part.exercises;
  }, 0);

  return (
    <div>
      <p>
        <strong>total of {total} exercises</strong>
      </p>
    </div>
  );
};

export default TotalExercises;
