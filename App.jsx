import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "../src/Pages/MainPage.jsx";

function App() {
  return (
    <>
    <BrowserRouter basename="/Repositorio_Proyects"  > 
    <Router>
      <Routes>

        <Route element={<MainPage/>} path="/" />
        </Routes>
 

    </Router>
    </BrowserRouter>
    </> 

  );
}

export default App;
