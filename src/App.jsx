import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Celebrity from "./pages/Celebrity";
import Search from "./pages/Search";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/peats/:id" element={<Celebrity />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default App;
