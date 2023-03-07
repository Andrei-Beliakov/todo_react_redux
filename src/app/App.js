import { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { List } from "../components/List/List";

const savedTodosArr = JSON.parse(localStorage.getItem("TodosArray")) ?? [];

function App() {
  const [todosArray, setTodosArray] = useState(savedTodosArr);
  const [inputValue, setInput] = useState("");

  const createTodosArray = () => {
    if (inputValue.length) {
      setTodosArray([
        ...todosArray,
        { text: inputValue, id: Date.now(), done: false },
      ]);
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    setTodosArray(todosArray.filter((el) => el.id !== id));
  };

  const deleteSelected = () => {
    setTodosArray(todosArray.filter((el) => el.done === false));
  };

  const toggleDone = (id) => {
    setTodosArray(
      todosArray.map((el) => {
        if (el.id === id) {
          el.done = !el.done;
          return el;
        } else {
          return el;
        }
      })
    );
  };

  const deleteAll = () => {
    setTodosArray([]);
  };

  console.log(todosArray);

  useEffect(() => {
    localStorage.setItem("TodosArray", JSON.stringify(todosArray));
  }, [todosArray]);

  return (
    <>
      <Header />
      <main>
        <List
          setInput={setInput}
          inputValue={inputValue}
          todosArray={todosArray}
          createTodosArray={createTodosArray}
          deleteTodo={deleteTodo}
          deleteAll={deleteAll}
          toggleDone={toggleDone}
          deleteSelected={deleteSelected}
        />
      </main>
    </>
  );
}

export default App;
