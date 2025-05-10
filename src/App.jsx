import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../src/Pages/MainPage.jsx";

function App() {
  return (
    <BrowserRouter basename="/Repositorio_Proyects">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
