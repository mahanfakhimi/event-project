import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Celebrity from "./pages/Celebrity";
import Search from "./pages/Search";
import Game from "./pages/Game";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/peats/:id" element={<Celebrity />} />
      <Route path="/search" element={<Search />} />
      <Route path="/game" element={<Game />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
