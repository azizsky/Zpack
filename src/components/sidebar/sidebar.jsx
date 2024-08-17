import React  from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
  // import Icons
import { MdMoveToInbox, MdAttachEmail, MdCalculate } 
  from "react-icons/md";
import { BsInboxesFill, BsGearFill } from "react-icons/bs";
import { FaQ } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import {   FaHome, FaRegCalendarAlt, FaTags, FaToolbox, FaMap, FaShoppingBag, FaWhatsappSquare, FaInstagramSquare } from "react-icons/fa";
import { TiInfoLarge } from "react-icons/ti";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { AiFillTikTok } from "react-icons/ai";
import { SiShopee } from "react-icons/si";
import Tokopedia from './../../utilities/home/Tokopedia.svg'; 
import Lazada from './../../utilities/home/Lazada.svg'; 


const Sidebar = ({isOpen}) => {
  
  
  
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'c'}`}>
    
      <h2 className="title-sidebar">
        Produk Kami </h2>
      <div className="content-produk-sidebar">
        <Link to="dus-makanan">
          <div className="content-sidebar">
            <BsInboxesFill className="icons-sidebar"/>
            <p className="teks-produk">Dus Makanan</p>
          </div>
        </Link>
        <Link to="dus-kosmetic">
          <div className="content-sidebar">
            <MdMoveToInbox className="icons-sidebar"/>
            <p className="teks-produk">Dus Kosmetic</p>
          </div>
        </Link>
        <Link to="dus-peralatan">
          <div className="content-sidebar">
            <FaToolbox className="icons-sidebar"/>
            <p className="teks-produk">Dus Peralatan</p>
          </div>
        </Link>
        <Link to="paperbag">
          <div className="content-sidebar">
            <FaShoppingBag className="icons-sidebar"/>
            <p className="teks-produk">PaperBag</p>
          </div>
        </Link>
        <Link to="hantag-label">
          <div className="content-sidebar">
            <FaTags className="icons-sidebar"/>
            <p className="teks-produk">Hantag & Label</p>
          </div>
        </Link>
        <Link to="brosur">
          <div className="content-sidebar">
            <FaMap className="icons-sidebar"/>
            <p className="teks-produk">Brosur</p>
          </div>
        </Link>
        <Link to="kalender">
          <div className="content-sidebar">
            <FaRegCalendarAlt className="icons-sidebar"/>
            <p className="teks-produk">Kalender</p>
          </div>
        </Link>
      </div>
      <div className="content-media-sidebar">
        <h2 className="title-sidebar">
        Kontak & Media Kami </h2>
        <a href="https://wa.me/6281217780249"target="_blank"rel="noopener noreferrer">
          <div className="content-sidebar">
            <FaWhatsappSquare className="icons-sidebar"/>
            <p className="teks-produk">Whatsapp</p>
          </div>
        </a>
        <a href="mailto:aszprinting21@gmail.com">
          <div className="content-sidebar">
            <MdAttachEmail className="icons-sidebar"/>
            <p className="teks-produk">Email</p>
          </div>
        </a>
        <a href="https://www.instagram.com/aszprinting?igsh=MXFiODZ6NG01N290aw==" 
               target="_blank"rel="noopener noreferrer">
          <div className="content-sidebar">
            <FaInstagramSquare className="icons-sidebar"/>
            <p className="teks-produk">Instagram</p>
          </div>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61560546776523" target="_blank" rel="noopener noreferrer">
          <div className="content-sidebar">
            <IoLogoFacebook className="icons-sidebar"/>
            <p className="teks-produk">Facebook</p>
          </div>
        </a>
        <a href="https://www.tiktok.com/@asz.printing?_t=8niVYqalmKX&_r=1" target="_blank" rel="noreferrer">
          <div className="content-sidebar">
            <AiFillTikTok className="icons-sidebar"/>
            <p className="teks-produk">Tiktok</p>
          </div>
        </a>
      </div>
      <div className="content-toko-sidebar">
        <h2 className="title-sidebar">
        Toko Ecommerce Kami </h2>
        <a href="https://id.shp.ee/6qB9Gqh" target="_blank"rel="noopener noreferrer">
          <div className="content-sidebar">
            <SiShopee className="icons-sidebar"/>
            <p className="teks-produk">Shoope</p>
          </div>
        </a>
        <a href="https://tokopedia.link/Y6qFbQj7mKb" target="_blank"rel="noopener noreferrer">
          <div className="content-sidebar">
            <img src={Tokopedia} className="icons-sidebar-img" alt="zpack"/>
            <p className="teks-produk">TokoPedia</p>
          </div>
        </a>
        <a href="https://tokopedia.link/Y6qFbQj7mKb" target="_blank"rel="noopener noreferrer">
          <div className="content-sidebar">
            <img src={Lazada} className="icons-sidebar-img" alt="zpack"/>
            <p className="teks-produk">Lazada</p>
          </div>
        </a>
      <div className="content-web-sidebar">
        <h2 className="title-sidebar">
        Halaman Web </h2>
        <Link to="/">
          <div className="content-sidebar">
            <FaHome className="icons-sidebar"/>
            <p className="teks-produk">Beranda</p>
          </div>
        </Link>
        <Link to="kalkulasi-produk">
          <div className="content-sidebar">
            <MdCalculate className="icons-sidebar"/>
            <p className="teks-produk">Calk Produk</p>
          </div>
        </Link>
        <Link to="galery-produk">
          <div className="content-sidebar">
            <BiSolidPhotoAlbum className="icons-sidebar"/>
            <p className="teks-produk">Gallery</p>
          </div>
        </Link>
        <Link to="tentang-kami">
          <div className="content-sidebar">
            <TiInfoLarge className="icons-sidebar"/>
            <p className="teks-produk">Tentang Kami</p>
          </div>
        </Link>
        <Link to="faq">
          <div className="content-sidebar">
            <FaQ className="icons-sidebar"/>
            <p className="teks-produk">FaQ</p>
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
    
    </div>
    );
};

export default Sidebar;