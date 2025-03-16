import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Halaman Home</h1>
      <nav>
        <ul>
          <li><Link to="/create">Buat To-Do</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
