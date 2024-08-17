import React, { useState } from 'react';
import "./PageAll.css";
import { RiCloseLine } from "react-icons/ri";
import { FaWhatsappSquare, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import wave from '../../../utilities/home/wave.svg';
import {Helmet, HelmetProvider} from 'react-helmet-async';




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
    { name: 'Kemasan kecil', 
      image: '/image/produk/kosmetic/skin.jpg',
      deskripsi: 'Kemasan ukuran kecil cocok untuk lipstic, lipbalm, dll 3 color, desain gradation, laminating Dop/mate sudah termasuk finishing tinggal pakai', 
      harga: 'Rp. 900 /pcs' },
    
    { name: 'Kemasan Sedang', 
      image: '/image/produk/kosmetic/skin1.jpg',
      deskripsi: 'Kemasan ukuran kecil cocok untuk serum, dll 2 color, hotting foil Gold, laminating Dop/mate sudah termasuk finishing tinggal pakai', 
      harga: 'Rp. 1.100 /pcs' },
    
    { name: 'Kemasan Hardbox', 
      image: '/image/produk/kosmetic/skin2.jpg',
      deskripsi: 'Kemasan ukuran Relative cocok untuk parfum, dll, model hardbox ketebalan 2mm, laminating Dop/mate sudah termasuk finishing tinggal pakai', 
      harga: 'Rp. 1.700 /pcs' },
    
    { name: 'Kemasan Besar', 
      image: '/image/produk/kosmetic/skin3.jpg',
      deskripsi: 'Kemasan ukuran kecil cocok untuk Handsanitizer, handbody dll full color, laminating Dop/mate sudah termasuk finishing tinggal pakai', 
      harga: 'Rp. 1.300 /pcs' },
    
    { name: 'Kemasan Cream', 
      image: '/image/produk/kosmetic/skin4.jpg',
      deskripsi: 'Kemasan ukuran Relative cocok untuk cream, dll 2 color, desain gradation, hotting foil silver, laminating Dop/mate sudah termasuk finishing tinggal pakai', 
      harga: 'Rp. 1.000 /pcs' },
      
    { name: 'Kemasan SunSkins', 
      image: '/image/produk/kosmetic/skin5.jpg',
      deskripsi: 'Kemasan ukuran Relative cocok untuk face powder, sunskins, dll 2 color, laminating Dop/mate sudah termasuk finishing tinggal pakai', 
      harga: 'Rp. 950 /pcs' },
    
    
  ];

  return (
  <HelmetProvider>
    <div className="Container-Page">
      <Helmet>
        <title>Kemasan kosmetic</title>
        <meta name="description" 
          content="Temukan berbagai jenis Kemasan kecantikan  eksklusif dan inovatif untuk produk Anda. Hubungi kami." />
        <meta name="keywords" 
          content="dus kecantikan, packaging, Kemasan kosmetic " />
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
