import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "../src/Pages/MainPage.jsx";

function App() {
  return (
    <>
    <Router>
      <Routes>

        <Route element={<MainPage/>} path="/" />
        </Routes>
 

    </Router>
    
    </> 

  );
}

export default App;
