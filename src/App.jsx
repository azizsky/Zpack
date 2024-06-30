import React, {useState}from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import HomePage from './components/pages/home/homepage';
import Header from './components/header/header';

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const btnSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
    <Header isOpen={isOpen} 
    btnSidebar={btnSidebar} />
    <Router>
      <Sidebar isOpen={isOpen}/> 
      
      
      <Routes>
        <Route path="/" element={<HomePage />} />
      
      
      </Routes> 
      
    </Router>
    </div>
  );
};

export default App;
