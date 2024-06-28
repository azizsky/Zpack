import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
  // import Icons
import { MdMoveToInbox } 
  from "react-icons/md";
import { BsInboxesFill, BsGearFill, BsWhatsapp, BsInstagram } 
  from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { SiTiktok } from "react-icons/si";
import { IoLogoFacebook } from "react-icons/io";
import { FaRegCalendarAlt, FaTags, FaToolbox, FaMap, FaShoppingBag } from "react-icons/fa";


const Sidebar = ({isOpen}) => {
  
  
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'close'}`}>
      <div className="content-produk-sidebar">
      <h2 className="title-sidebar">
        Produk Kami </h2>
        <Link to="#">
          <div className="content-sidebar">
            <BsInboxesFill className="icons-sidebar"/>
            <p className="teks-produk">Dus Makanan</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <MdMoveToInbox className="icons-sidebar"/>
            <p className="teks-produk">Dus Kosmetic</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <FaToolbox className="icons-sidebar"/>
            <p className="teks-produk">Dus Peralatan</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <FaShoppingBag className="icons-sidebar"/>
            <p className="teks-produk">PaperBag</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <FaTags className="icons-sidebar"/>
            <p className="teks-produk">Hantag & Label</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <FaMap className="icons-sidebar"/>
            <p className="teks-produk">Brosur</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <FaRegCalendarAlt className="icons-sidebar"/>
            <p className="teks-produk">Kalender</p>
          </div>
        </Link>
      </div>
      <div className="content-media-sidebar">
        <h2 className="title-sidebar">
        Kontak & Media Kami </h2>
        <Link to="#">
          <div className="content-sidebar">
            <BsWhatsapp className="icons-sidebar"/>
            <p className="teks-produk">Whatsapp</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <TfiEmail className="icons-sidebar"/>
            <p className="teks-produk">Email</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <BsInstagram className="icons-sidebar"/>
            <p className="teks-produk">Instagram</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <IoLogoFacebook className="icons-sidebar"/>
            <p className="teks-produk">Facebook</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <SiTiktok className="icons-sidebar"/>
            <p className="teks-produk">Tiktok</p>
          </div>
        </Link>
      </div>
      <div className="content-toko-sidebar">
        <h2 className="title-sidebar">
        Toko Ecommerce Kami </h2>
        <Link to="#">
          <div className="content-sidebar">
            <BsWhatsapp className="icons-sidebar"/>
            <p className="teks-produk">Whatsapp</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <TfiEmail className="icons-sidebar"/>
            <p className="teks-produk">Email</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <BsInstagram className="icons-sidebar"/>
            <p className="teks-produk">Instagram</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <IoLogoFacebook className="icons-sidebar"/>
            <p className="teks-produk">Facebook</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <SiTiktok className="icons-sidebar"/>
            <p className="teks-produk">Tiktok</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <BsGearFill className="icons-sidebar"/>
            <p className="teks-produk">Setting</p>
          </div>
        </Link>
      </div>
    
    </div>
    );
};

export default Sidebar;