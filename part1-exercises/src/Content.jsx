import React from "react";

export default function Content({ part }) {
  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  );
}
