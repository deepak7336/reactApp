import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
const Todos = () => {
  let initTodo = [];
  //   if (localStorage.getItem("todos") === null) {
  //     initTodo = [];
  //   } else {
  //     initTodo = JSON.parse(localStorage.getItem("todos"));
  //   }
  const onDelete = (todel) => {
    console.log("i am on delet", todel);
    setTodos(
      todos.filter((e) => {
        return todel !== e;
      })
    );
    // localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (toadd) => {
    // console.log("i am in todos.js addtodo fucntion", toadd);
    let id = 0;
    if (todos.length) {
      id = todos[todos.length - 1].sno + 1;
    }
    console.log(id);
    let toset = {
      sno: id,
      title: toadd,
    };
    // console.log(id);
    setTodos([...todos, toset]);
  };
  const [todos, setTodos] = useState(initTodo);
  //   useEffect(() => {
  //     localStorage.setItem("todos", JSON.stringify(todos));
  //   }, [todos]);
  return (
    <>
      <AddTodo addTodo={addTodo} />
      <div className="d-flex align-items-center flex-wrap">
        {todos.length > 0
          ? todos.map((todo) => {
              return <Todo todo={todo} key={todo.sno} onDelete={onDelete} />;
            })
          : "nothing to show here "}
        ;
      </div>
    </>
  );
};

export default Todos;
