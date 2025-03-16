import React, { useState } from "react";

const CreateTodo = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("To-Do Baru:", todo);
    alert("To-Do berhasil dibuat!");
    setTodo({ title: "", description: "", dueDate: "" }); // Reset form
  };

  return (
    <div>
      <h1>Buat To-Do Baru</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Judul:</label>
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Deskripsi:</label>
          <textarea
            name="description"
            value={todo.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Tanggal Deadline:</label>
          <input
            type="date"
            name="dueDate"
            value={todo.dueDate}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Tambah To-Do</button>
      </form>
    </div>
  );
};

export default CreateTodo;
