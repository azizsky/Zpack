import React, { useState } from 'react';
import "./PageAll.css";
import { RiCloseLine } from "react-icons/ri";
import { FaWhatsappSquare, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import wave from '../../../utilities/home/wave.svg';
import {Helmet, HelmetProvider } from 'react-helmet-async';




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
        <button className="wa-direct-modal" onClick={() => onWhatsAppRedirect(product)}><FaWhatsappSquare /> AlihKan Ke WhatsApp <FaArrowRight /></button>
      </div>
    </div>
  );
};

const DusMakanan = () => {

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
    { name: 'Hantag', 
      image: '/image/produk/hantag/tag.jpg',
      deskripsi: 'Hantag, ukuran relative, 2 layer, laminasi dop/mate full color  ', 
      harga: 'Rp. 500 /pcs' },
    
    { name: 'Hantag', 
      image: '/image/produk/hantag/tag1.jpg',
      deskripsi: 'Hantag, ukuran relative, 1 layer, laminasi dop/mate 2 color  ', 
      harga: 'Rp. 100 /pcs' },
    
    { name: 'Hantag', 
      image: '/image/produk/hantag/tag2.jpg',
      deskripsi: 'Hantag, ukuran relative, 2 lapis, laminasi dop/mate full color  ', 
      harga: 'Rp. 200 /pcs' },
    
    { name: 'Hantag', 
      image: '/image/produk/hantag/tag3.jpg',
      deskripsi: 'Hantag, ukuran relative, 2 lapis, laminasi dop/mate 1 color  ', 
      harga: 'Rp. 180 /pcs' },
    
    { name: 'Hantag', 
      image: '/image/produk/hantag/tag4.jpg',
      deskripsi: 'Hantag, ukuran relative, 2 lapis, laminasi dop/mate 2 color  ', 
      harga: 'Rp. 190 /pcs' },
    
    { name: 'Hantag Label', 
      image: '/image/produk/hantag/tag5.jpg',
      deskripsi: 'Hantag + wash label + nick label, ukuran relative, 2 lapis, laminasi dop/mate 1 color  ', 
      harga: 'Rp. 500 /pcs' },
    
    { name: 'Hantag', 
      image: '/image/produk/hantag/tag6.jpg',
      deskripsi: 'Hantag, ukuran relative, 2 lapis, laminasi dop/mate 2 color  ', 
      harga: 'Rp. 200 /pcs' },
    

    
    
  ];

  return (
  <HelmetProvider>
    <div className="Container-Page">
      <Helmet>
        <title>Hantag Label</title>
        <meta name="description" 
          content="Temukan berbagai jenis hantag dan label eksklusif dan inovatif untuk produk Anda. Hubungi kami." />
        <meta name="keywords" 
          content="Hantag Label clothing label" />
        <meta name="author" 
          content="z pack devisi asz team" />

      </Helmet>
      <img src={wave} alt="wave"/>
      <Link to="/" className="kembali"><FaArrowLeft /></Link>
      <h2 className="Container-tittle">Gambar Di Bawah Hanya Reperensi. Produk Yang Anda Inginkan Untuk Model, Desain, Ukuran Dan Pola Potongan. Jika Produk Yang Kamu Inginkan Tidak Ada Di Bawah Bukan Berarti Kami Tidak Bisa Buat, Kami Hanya Tidak Punya Desain Dan Gambar.. Untuk Harga Di Bawah Ini Relative Bisa Naik Atau Turun. Untuk Informasi Lebih Lengkap, Hubungi Kami Dengan Mengklik Produk Yang Dipilih, Dan Klik Tombol "Alihkan Ke WhatsApp". Anda Akan Otomatis Diarahkan Ke WhatsApp Kami. </h2>
      
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
  </HelmetProvider>
  );
};

export default DusMakanan;
