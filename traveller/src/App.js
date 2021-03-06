
// import { Router } from 'express';
// import { Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Router>
     { <Navbar/>}
    <div className="App">
      <Routes>
     
      <Route path="/" element={<Home />} />
      <Route path='/services' element={<Services/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
