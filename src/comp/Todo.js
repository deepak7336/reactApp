import React from "react";

const Todo = ({ todo, onDelete }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h2>{todo.sno}</h2>
        <h5 className="card-title">{todo.title}</h5>
        <button onClick={() => onDelete(todo)} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
