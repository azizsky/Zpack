import React, {useState}from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import HomePage from './components/pages/home/homepage';
import Header from './components/header/header';
import DusMakanan from './components/pages/ProdukPage/dusmakanan';
import DusKosmetic from './components/pages/ProdukPage/duskosmetic';
import DusPeralatan from './components/pages/ProdukPage/dusperalatan';
import HantagLabel from './components/pages/ProdukPage/hantaglabel';
import Kalender from './components/pages/ProdukPage/kalender';
import PaperBag from './components/pages/ProdukPage/paperbag';
import Brosur from './components/pages/ProdukPage/brosur';
import Tentang from './components/pages/tentangkami/tentangkami';
import Kalkulasi from  './components/pages/kalkulasi/kalkulasi';
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
        <Route path="/dus-makanan" element={<DusMakanan />} />
        <Route path="/dus-kosmetic" element={<DusKosmetic />} />
        <Route path="/dus-peralatan" element={<DusPeralatan />} />
        <Route path="/hantag-label" element={<HantagLabel />} />
        <Route path="/kalender" element={<Kalender />} />
        <Route path="/paperbag" element={<PaperBag />} />
        <Route path="/brosur" element={<Brosur />} />
        <Route path="/tentang-kami" element={<Tentang />} />
        <Route path="/kalkulasi-produk" element={<Kalkulasi />} />
      
      
      </Routes> 
      
    </Router>
    </div>
  );
};

export default App;
