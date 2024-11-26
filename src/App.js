import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Em_breve from './páginas/Em_breve';
import Menu from './páginas/Menu';
import Cad_func from './páginas/Cad_func'


function App() {
  return (

    <Router>
      <div className="App">
        <div className='container' style={{ marginLeft: "0px", padding: "10px", flex: 1 }}>
          <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/Em_breve' element={<Em_breve />} />
            <Route path='/Cad_func' element={<Cad_func/>} />
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
