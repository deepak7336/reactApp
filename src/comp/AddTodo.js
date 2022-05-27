import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (todo) {
      addTodo(todo);
      // alert("it cannot be blank")
    }
    setTodo("");
  };
  return (
    <div className="container mx-5">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            placeholder="Enter Description"
            className="form-control"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
