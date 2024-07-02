import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/Home';
import './App.css';
import PaginaCep from './screens/PaginaCep';
import PaginaDog from './screens/PaginaDog'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/buscar-cep" element={<PaginaCep/>}/>
        <Route path="/dogs" element={<PaginaDog/>}/>
      </Routes>
    </Router>
  )
}

export default App;