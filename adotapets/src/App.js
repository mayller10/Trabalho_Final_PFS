import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./view/Home.js";
import Login from "./view/Login.js";
import Cadastro from "./view/Cadastro.js";
import AdicionarPet from "./view/AdicionarPet.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
