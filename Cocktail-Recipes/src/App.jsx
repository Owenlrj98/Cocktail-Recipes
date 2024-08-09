import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import GinListPage from "./pages/GinListPage";
import VodkaListPage from "./pages/VodkaListPage";


function App() {
  return (
    <>
      <h1>Cocktail Recipes</h1>
      <Navbar />
        <button>Gin</button>
        <button>Vodka</button>
      <Routes>
        <Route path="/gin" element={<GinListPage />} />
        <Route path="/vodka" element={<VodkaListPage />} />
      </Routes>
    </>
  );
}

export default App;
