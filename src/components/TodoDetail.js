import React from "react";
import { useParams } from "react-router-dom";

const TodoDetail = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Detail To-Do</h1>
      <p>Melihat detail To-Do dengan ID: {id}</p>
    </div>
  );
};

export default TodoDetail;
