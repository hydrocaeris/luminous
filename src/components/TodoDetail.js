import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const todos = [
  { id: "1", title: "Belajar React", description: "Pelajari dasar-dasar React", dueDate: "2024-03-20" },
  { id: "2", title: "Mengerjakan PR", description: "Selesaikan tugas matematika", dueDate: "2024-03-21" },
  { id: "3", title: "Olahraga", description: "Jogging selama 30 menit", dueDate: "2024-03-22" },
];

const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Cari data berdasarkan ID
  const todo = todos.find((item) => item.id === id);

  if (!todo) {
    return <p>To-Do tidak ditemukan.</p>;
  }

  return (
    <div>
      <h1>Detail To-Do</h1>
      <p><strong>Judul:</strong> {todo.title}</p>
      <p><strong>Deskripsi:</strong> {todo.description}</p>
      <p><strong>Tanggal Deadline:</strong> {todo.dueDate}</p>

      <button onClick={() => navigate("/")}>Kembali ke Home</button>
    </div>
  );
};

export default TodoDetail;
