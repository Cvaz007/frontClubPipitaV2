import React from 'react';
import { NavBar } from './NavBar/NavBar.js';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { rutas } from "./routes.js"
import { Footer } from './Footer/Footer.js';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar></NavBar>
        <div className='contenedor'>
          <Routes>
            {rutas.map(ruta => <Route
              element={<ruta.component  ></ruta.component>}
              key={ruta.path}
              path={ruta.path} >
            </Route>)}
          </Routes>
          
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
