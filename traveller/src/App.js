
// import { Router } from 'express';
// import { Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<Navbar />} />
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
