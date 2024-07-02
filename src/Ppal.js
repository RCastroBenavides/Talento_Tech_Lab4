import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompNF from "./Componentes/CompNF";
import Episodios from "./Componentes/Episodios";
import Infoper from "./Componentes/Infoper";
import App from "./App";
import Menu from "./Menu";
function Ppal() {
  return (
    <BrowserRouter>
        <Menu/>
        <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/App' element={<App/>}/>        
        <Route path='/epi' element={<Episodios/>}/>
        <Route path='/inf' element={<Infoper/>}/>
        <Route path='*' element={<CompNF/>}/>
      </Routes>
    </BrowserRouter>
);
}
export default Ppal;