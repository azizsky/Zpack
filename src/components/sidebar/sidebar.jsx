import React  from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
  // import Icons
  import { GiPapers } from "react-icons/gi";
import { MdMoveToInbox, MdAttachEmail, MdCalculate } 
  from "react-icons/md";
import { BsInboxesFill, BsGearFill, BsInstagram, BsFillInfoSquareFill } 
  from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";
import { FaCartArrowDown,  FaHome, FaRegCalendarAlt, FaTags, FaToolbox, FaMap, FaShoppingBag, FaWhatsappSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Sidebar = ({isOpen}) => {
  
  
  
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'c'}`}>
    
      <h2 className="title-sidebar">
        Produk Kami </h2>
      <div className="content-produk-sidebar">
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
            <FaWhatsappSquare className="icons-sidebar"/>
            <p className="teks-produk">Whatsapp</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <MdAttachEmail className="icons-sidebar"/>
            <p className="teks-produk">Email</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <FaInstagramSquare className="icons-sidebar"/>
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
            <AiFillTikTok className="icons-sidebar"/>
            <p className="teks-produk">Tiktok</p>
          </div>
        </Link>
      </div>
      <div className="content-toko-sidebar">
        <h2 className="title-sidebar">
        Toko Ecommerce Kami </h2>
        <Link to="#">
          <div className="content-sidebar">
            <MdAttachEmail className="icons-sidebar"/>
            <p className="teks-produk">Shoope</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <MdAttachEmail className="icons-sidebar"/>
            <p className="teks-produk">TokoPedia</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <BsInstagram className="icons-sidebar"/>
            <p className="teks-produk">Lazada</p>
          </div>
        </Link>
      <div className="content-web-sidebar">
        <h2 className="title-sidebar">
        Halaman Web </h2>
        <Link to="/">
          <div className="content-sidebar">
            <FaHome className="icons-sidebar"/>
            <p className="teks-produk">Beranda</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <GiPapers className="icons-sidebar"/>
            <p className="teks-produk">info Produk</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <FaCartArrowDown className="icons-sidebar"/>
            <p className="teks-produk">Info Order</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <MdCalculate className="icons-sidebar"/>
            <p className="teks-produk">Calk Produk</p>
          </div>
        </Link>
        <Link to="#">
          <div className="content-sidebar">
            <BsFillInfoSquareFill className="icons-sidebar"/>
            <p className="teks-produk">Tentang Kami</p>
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