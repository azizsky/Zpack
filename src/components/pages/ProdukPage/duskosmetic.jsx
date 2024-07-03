import React, { useState } from 'react';
import "./PageAll.css";
import useIntersectionAnimation from './../../../animation';
import { RiCloseLine } from "react-icons/ri";
import { FaWhatsappSquare, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import wave from '../../../utilities/home/wave.svg';
const Modal = ({ show, onClose, product, onWhatsAppRedirect }) => {
  const handleCloseModal = (e) => {
    // Menutup modal hanya jika event klik terjadi di luar area modal
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal">
        <button onClick={onClose} className="close-modal"><RiCloseLine /></button>
        <img src={product.image} alt={product.name} className="modal-img"/>
        <h1 className="nama-produk">Produk: {product.name}</h1>
        <h2 className="deskripsi-produk">Deskripsi: {product.deskripsi} </h2>
        <p className="harga-produk">Harga: {product.harga}</p>
        <button className="wa-direct-modal" onClick={() => onWhatsAppRedirect(product)}><FaWhatsappSquare /> WhatsApp <FaArrowRight /></button>
      </div>
    </div>
  );
};

const DusKosmetic= () => {
  useIntersectionAnimation('.animate', 'zoom-in');

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleWhatsAppRedirect = (product) => {
    const phoneNumber = '081217780249'; // Ganti dengan nomor WhatsApp bisnismu
    const message = `Nama: ${product.name}\nDeskripsi: ${product.deskripsi}`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };


  const products = [
    // produk 1
    { name: 'PaperBag', image: '/image/content/bag.jpg', deskripsi: 'coba dari map', harga: 'Rp. 1000' },
    // produk 2
    { name: 'PaperBag', image: '/image/content/bag.jpg', deskripsi: 'coba dari map', harga: 'Rp. 2000' },
    // produk 3
    { name: 'PaperBag', image: '/image/content/bag.jpg', deskripsi: 'coba dari map', harga: 'Rp. 3000' },
    // produk 4
    { name: 'PaperBag', image: '/image/content/bag.jpg', deskripsi: 'coba dari map', harga: 'Rp. 4000' },
    // produk 5
    { name: 'PaperBag', image: '/image/content/bag.jpg', deskripsi: 'coba dari map', harga: 'Rp. 5000' },
    // produk 6
    { name: 'PaperBag', image: '/image/content/bag.jpg', deskripsi: 'coba dari map', harga: 'Rp. 5000' }
  ];

  return (
    <div className="Container-Page">
      <img src={wave} alt="wave"/>
      <Link to="/" className="kembali"><FaArrowLeft /></Link>
      <h2 className="Container-tittle"> pilih Kategori lengkap dus makanan untuk memudahkan Anda menemukan solusi penyimpanan makanan yang ideal</h2>
      
      <div className="container-categori-home animate">
        {products.map((product, index) => (
          <div
            key={index}
            className="card-categori-home animate"
            onClick={() => handleProductClick(product)}
          >
            <img 
              src={product.image} 
              className="img-categori-home"
              alt={product.name}
            /> 
            <p className="text-categori-home">{product.name}</p>
          </div>
        ))}
        <img src={wave} alt="wave"/>
        <div className="fill-information-home">
          <h2>Eksklusif dan Berkelas : </h2>
          <h3> Dus makanan eksklusif yang menambahkan sentuhan berkelas pada produk Anda.</h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Kreatif dan Inovatif : </h2>
          <h3>Solusi kreatif dan inovatif untuk packaging yang menginspirasi. </h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Desain Personalisasi : </h2>
          <h3>Personalisasi desain yang memperkuat identitas merek Anda.</h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Ramah Lingkungan : </h2>
          <h3>Pilihan ramah lingkungan untuk berkontribusi pada keberlanjutan.</h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Penyimpanan Aman dan Efisien: </h2>
          <h3>Penyimpanan Aman dan Efisien: "Penyimpanan aman dan efisien untuk menjaga produk makanan tetap segar.</h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Desain estetika : </h2>
          <h3>Desain estetika modern untuk menarik perhatian pelanggan.</h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Fungsional dan Praktis : </h2>
          <h3>Fungsional dan Praktis: "Desain fungsional dan praktis yang mempermudah penggunaan sehari-hari.</h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Keunikan dan Kualitas :  </h2>
          <h3>Kombinasi keunikan dan kualitas untuk menjamin kepuasan pelanggan.</h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Kenyamanan Penggunaan :  </h2>
          <h3>Solusi packaging yang mengutamakan kenyamanan dan kemudahan penggunaan.</h3>
        </div>


        <h3 className="close">close</h3>
      </div>

      <Modal 
        show={showModal} 
        onClose={handleCloseModal} 
        product={selectedProduct} 
        onWhatsAppRedirect={handleWhatsAppRedirect}
      />
    </div>
  );
};

export default DusKosmetic;
