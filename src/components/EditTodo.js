import React from "react";
import { useParams } from "react-router-dom";

const EditTodo = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Ubah To-Do</h1>
      <p>Mengedit To-Do dengan ID: {id}</p>
    </div>
  );
};

export default EditTodo;
