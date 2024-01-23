import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Inicio from './routes/Inicio';
import Producto from './routes/Producto'
import Contacto from './routes/Contacto'
import './App.css'

function App() {
  return (
          <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Producto' element={<Producto />} />
        <Route path='/Contacto' element={<Contacto />} />
    </Routes>
  );
}

export default App;
