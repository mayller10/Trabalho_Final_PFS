import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./view/Home.js";
import Login from "./view/Login.js";
import Cadastro from "./view/Cadastro.js";
import AdicionarPet from "./view/AdicionarPet.js";
import Adotados from "./view/Adotados.js";
import AdotadosADM from "./view/AdotadosADM.js";
import HomeADM from "./view/HomeADM.js";
import EditarPet from "./view/EditarPet.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />

        <Route path="/usuario">
          <Route path="home" element={<Home />} />
          <Route path="adotados" element={<Adotados />} />
        </Route>
        
        <Route path="/adm">
          <Route path="home" element={<HomeADM />} />
          <Route path="adotados" element={<AdotadosADM />} />
          <Route path="cadastrar" element={<AdicionarPet />} />
          <Route path="editar" element={<EditarPet/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
