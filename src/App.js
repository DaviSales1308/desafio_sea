import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Em_breve from './páginas/Em_breve';
import Menu from './páginas/Menu';
import Cad_func from './páginas/Cad_func';
import axios from 'axios';


function App() {
  const [funcionarios, setFuncionarios] = useState([]);

  // Buscar funcionários do JSON Server
  useEffect(() => {
    axios
      .get("http://localhost:3001/funcionarios")
      .then((response) => setFuncionarios(response.data))
      .catch((error) => console.error("Erro ao buscar funcionários:", error));
  }, []);

  // Adicionar funcionário
  const adicionarFuncionario = (novoFuncionario) => {
    axios
      .post("http://localhost:3001/funcionarios", novoFuncionario)
      .then((response) => {
        setFuncionarios([...funcionarios, response.data]);
      })
      .catch((error) => console.error("Erro ao salvar funcionário:", error));
  };

  return (
    
    <Router>
      <div className="App">
        <div className='container' style={{ marginLeft: "0px", padding: "10px", flex: 1 }}>
          <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/Em_breve' element={<Em_breve />} />
            <Route path='/Cad_func' element={<Cad_func/>} />
            <Route path="/Cad_func/:cpf" element={<Cad_func />} />
          </Routes>
        </div>
        <div className='side'>
          <Sidebar />
        </div>
      </div>
    </Router>

  );
}

export default App;