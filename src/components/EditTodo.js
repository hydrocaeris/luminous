import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // State untuk menyimpan nilai input
  const [todo, setTodo] = useState({
    title: "Judul Lama", // Gantilah dengan data dari database atau API
    description: "Deskripsi Lama",
    dueDate: "2024-03-20",
  });

  // Handle perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  // Handle penyimpanan perubahan
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("To-Do Diperbarui:", todo);
    alert("To-Do berhasil diperbarui!");
    navigate("/"); // Kembali ke home setelah edit
  };

  return (
    <div>
      <h1>Ubah To-Do</h1>
      <p>Mengedit To-Do dengan ID: {id}</p>

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

        <button type="submit">Terapkan</button>
        <button type="button" onClick={() => navigate("/")}>Kembali ke Home</button>
      </form>
    </div>
  );
};

export default EditTodo;

