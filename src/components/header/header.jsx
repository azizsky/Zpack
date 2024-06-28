import React from 'react';
import './header.css';
import './../../global.css';
import { RiMenu5Line, RiCloseLine } from "react-icons/ri";

const Header = ({isOpen, btnSidebar}) => {
  
  
  
  return (
  <div className="header">
    <img className="logo" src="/image/logo/logoB.png" alt="zpack"/>
    <button className="btnside" onClick={btnSidebar}> {isOpen ? <RiCloseLine /> : <RiMenu5Line />}</button>
  </div>
    
    );
};

export default Header;