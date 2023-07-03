import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const App = () => {
  const course = "Desenvolvimento de aplicação Half Stack";
  const parts = [
    {
      name: "Fundamentos da biblioteca React",
      exercises: 10,
    },
    {
      name: "Usando props para passar dados",
      exercises: 7,
    },
    {
      name: "Estado de um componente",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content part={parts[0]} />
      <Content part={parts[1]} />
      <Content part={parts[2]} />
      <Total
        total={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      />
    </div>
  );
};

export default App;
