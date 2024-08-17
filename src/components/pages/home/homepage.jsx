import React, {useRef} from 'react';
import './homepage.css';
import waveSvgT from '../../../utilities/home/waveModeWT.svg';
import waveSvgB from '../../../utilities/home/waveModeWB.svg';
import useIntersectionAnimation  
from './../../../animation.js';
import { Link } from 'react-router-dom';
import { MdCategory } from "react-icons/md";
import { AiOutlineCalculator } from "react-icons/ai";
import { GiPapers } from "react-icons/gi";
import { TbShoppingCartCog } from "react-icons/tb";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const HomePage = () => {
  
  useIntersectionAnimation(' .animate ', 'zoom-in');
  const CategoriRef = useRef(null);
  const InfoProdukRef = useRef(null);
  const InfoOrderRef = useRef(null);
  const InfoKamiRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  const FooterIcon = ({ icon, text, onClick }) => (
  <div className="icon-container" onClick={onClick}>
    {icon}
    <div className="icon-text">{text}</div>
  </div>
);
  
  return (
    <div className="homepage">
      <footer className="footer">
      <FooterIcon icon={<MdCategory />} text="Category" onClick={() => scrollToSection(CategoriRef)} />
      <FooterIcon icon={<GiPapers />} text="Info Produk" onClick={() => scrollToSection(InfoProdukRef)} />
      <FooterIcon icon={<TbShoppingCartCog />} text="Info Order" onClick={() => scrollToSection(InfoOrderRef)} />
      <FooterIcon icon={<FaPeopleGroup />} text="Info Kami" onClick={() => scrollToSection(InfoKamiRef)} />
      <Link to="kalkulasi-produk"><div className="icon-container">
        <AiOutlineCalculator />
        <div className="icon-text">Kalkulasi Produk</div>
      </div></Link>
      <div className="icon-container">
        <a href="https://wa.me/6281217780249"target="_blank"rel="noopener noreferrer"><FaWhatsappSquare /></a>
        <div className="icon-text">WhatsApp</div>
      </div>
    </footer>
      <div className="home-content-1">
        <img src={waveSvgT} alt="wave" className="wave animate" />
        <div className="home-content-text-1" >
          <h1 className="animate">Selamat Datang Di</h1>
          <h1 className="animate">Z Pack</h1>
          <h3 className="animate"> 
            Kami menyediakan solusi packaging yang terpercaya. Kami menawarkan berbagai produk berkualitas tinggi yang dirancang khusus untuk memenuhi kebutuhan Anda di berbagai industri. Dengan pengalaman dan dedikasi yang kuat, kami siap membantu bisnis Anda agar tampilan lebih profesional dan menarik
          </h3>
        </div>
      </div>
      <div className="container-categori-home animate " ref={CategoriRef}>
        <h1 className="tittle-container animate">Lihat Categori Produk</h1>
        <Link to="/dus-makanan" >
          <div className="card-categori-home animate ">
            <img 
              src="./image/produkhome/makanan.jpg" 
              className="img-categori-home"
              alt="kemasan makanan"/> 
            <p className="text-categori-home">Dus Makanan</p>
          </div>
        </Link>
        <Link to="/dus-kosmetic" >
          <div className="card-categori-home  animate ">
            <img 
              src="./image/produkhome/kosmetic.jpg" 
              className="img-categori-home"
              alt="kemasan kecantikan"/> 
            <p className="text-categori-home ">Dus Kosmetic</p>
          </div>
        </Link>
        <Link to="/dus-peralatan" >
          <div className="card-categori-home  animate">
            <img 
              src="./image/produkhome/peralatan.jpg" 
              className="img-categori-home "
              alt="kemasan Peralatan"/> 
            <p className="text-categori-home ">Dus Peralatan</p>
          </div>
        </Link>
        <Link to="/hantag-label" >
          <div className="card-categori-home  animate ">
            <img 
              src="./image/produkhome/hantag.jpg" 
              className="img-categori-home "
              alt="hantag"/> 
            <p className="text-categori-home ">Hantag Label</p>
          </div>
        </Link>
        <Link to="/paperbag" >
          <div className="card-categori-home  animate ">
            <img 
              src="./image/produkhome/bag.jpg" 
              className="img-categori-home "
              alt="paperbag"/> 
            <p className="text-categori-home ">PaperBag</p>
          </div>
        </Link>
        <Link to="/kalender" >
          <div className="card-categori-home animate ">
            <img 
              src="./image/produkhome/kalender.jpg" 
              className="img-categori-home "
              alt="Kalender"/> 
            <p className="text-categori-home ">Kalender</p>
          </div>
        </Link>
        <Link to="/brosur" >
          <div className="card-categori-home animate ">
            <img 
              src="./image/produkhome/brosur.jpg" 
              className="img-categori-home "
              alt="Brosur"/> 
            <p className="text-categori-home ">Brosur</p>
          </div>
        </Link>
      </div>
      <div className="information-produk-home">
      <img src={waveSvgB} alt="wave" className="wave2 animate" />
      
      
        <h1 className="tittle-container animate" ref={InfoProdukRef}>Informasi Produk</h1>
        <div className="fill-information-home animate">
          <h2>Bahan : </h2>
          <h3>Kami menyediakan 4 jenis bahan berkualitas: Duplex, Ivory, Craft, dan Art Paper (AP). Semua jenis bahan ini memiliki karakteristik, jenis ketebalan, dan kelenturan yang berbeda, mulai dari 100 hingga 400 gsm.</h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Laminasi : </h2>
          <h3>Kami menyediakan opsi laminasi, yaitu melapisi bahan dengan plastik agar produk tahan air dan minyak. Ada 2 jenis laminasi: dop/matte dan glossy. </h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Foil : </h2>
          <h3>Kami menyediakan opsi foil, yaitu menempelkan pita foil agar produk memiliki warna mencolok dan berkilau seperti emas dan perak. Cocok untuk logo brand atau teks agar memiliki ciri khas premium.</h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Emboss & Deboss  : </h2>
          <h3>Kami menyediakan opsi emboss dan deboss, di mana bahan dipress agar permukaan bahan bertekstur keluar (emboss) atau masuk (deboss). Biasanya digunakan untuk logo brand atau teks agar produk memiliki ciri khas premium.</h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Spot Uv & Vernis  : </h2>
          <h3>Kami menyediakan opsi spot UV varnish, di mana bahan dilapisi seperti cairan resin dan dikeringkan menggunakan UV agar berkilau. Cocok untuk logo brand atau teks.</h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Perhatian : </h2>
          <h3>Semua fitur ini opsional dan tidak semua bahan cocok untuk fitur seperti di atas. Harap menanyakan atau konsultasi dengan kami.</h3>
        </div>
      </div>
      
      
      <div className="information-produk-home" ref={InfoOrderRef}>
        <h1 className="tittle-container animate">Informasi Order</h1>
        <div className="fill-information-home animate">
          <h2>Pelanggan Pertaman : </h2>
          <h3>Untuk pemesanan pertama kali di Z Pack diperlukan DP/uang muka sebesar 70% dari subtotal harga barang. </h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Durasi : </h2>
          <h3>Waktu pengerjaan relatif tergantung pada tingkat kesulitan pembuatan produk dan jumlah yang diminta. Standarnya adalah 1 minggu hingga 15 hari.</h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Pembayaran : </h2>
          <h3>Untuk pembayaran, kami mempermudah pelanggan melalui transfer bank (BCA, BRI, Mandiri), atau dompet digital (Dana, Ovo, Gopay), maupun pembayaran tunai.</h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Pengiriman : </h2>
          <h3>Untuk pengiriman di daerah Bandung, Anda bisa mengambil pesanan di tempat kami di Jalan Pagarsih Kalau Dekat Masih Bisa Kami Antar atau menggunakan layanan Grab & Gojek. Untuk daerah luar Bandung, pengiriman dapat dilakukan melalui ekspedisi, dan ongkos kirim ditanggung oleh pembeli.</h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Perhatian : </h2>
          <h3>Untuk Saat Ini Kami Belum Bisa Melakukan Transaksi Lewat Web Z Pack Harap Hubungi Kami Dengan Klik Produk Atau Klik WhatsApp Untuk Hubungi Kami.</h3>
        </div>
      </div>
      

      
      <div className="information-produk-home" ref={InfoKamiRef}>
        <h1 className="tittle-container animate">Mengapa Milih Kami</h1>
        <div className="fill-information-home animate">
          <h2>Kualitas Terjamin : </h2>
          <h3>Kami menggunakan bahan berkualitas tinggi dan proses produksi yang cermat untuk memastikan setiap produk yang kami hasilkan memenuhi standar tertinggi. </h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Desain : </h2>
          <h3>jika kamu belum punya desain. kami juga siap membantu buatkan desain kemasan anda agar lebih menarik.. Baik Anda membutuhkan desain baru atau revisi desain yang sudah ada, kami siap membantu.</h3>
        </div>
        <div className="fill-information-home animate">
          <h2>flexsibilitas & Kostumisasi : </h2>
          <h3>Kami menawarkan berbagai opsi customisasi seperti laminasi, foil, emboss & deboss, dan spot UV & varnish. Ini memungkinkan Anda untuk menciptakan kemasan yang sesuai dengan kebutuhan dan identitas brand Anda.</h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Pengalaman & Keahlian : </h2>
          <h3>Dengan pengalaman bertahun-tahun di industri kemasan, tim kami memiliki keahlian yang diperlukan untuk memberikan solusi terbaik untuk kebutuhan kemasan Anda.</h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Pelayanan Terbaik : </h2>
          <h3>Kami berkomitmen untuk memberikan pelayanan pelanggan yang ramah dan responsif. Tim kami siap membantu dan memberikan konsultasi untuk memastikan Anda mendapatkan produk yang Anda inginkan.</h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Skala Produksi : </h2>
          <h3>Kami menerima order dalam jumlah skala kecil maupun besar. Dengan kapasitas produksi hingga 300 ribu pcs per bulan, kami siap memenuhi kebutuhan Anda, baik untuk pesanan dalam jumlah kecil maupun produksi massal.</h3>
        </div>
        <div className="fill-information-home animate">
          <h2>Garansi : </h2>
          <h3>Kami Juga Menyediakan Garansi Jika Ada Kerusakan Atau Kegagalan Produk Dari Pihak Kami Kecuali Kesalahan Dari Konsumen Garansi Tidak Bisa Di Claim.</h3>
        </div>
      </div>
      <div className="Text-home-close animate">
        Terima kasih atas kepercayaan dan kerjasama Anda dengan Z Pack. Kami sangat menghargai dukungan Anda dan berkomitmen untuk terus memberikan layanan dan produk terbaik. Jika Anda memiliki pertanyaan atau membutuhkan informasi lebih lanjut, jangan ragu untuk menghubungi kami. Kami siap membantu Anda.
      </div>
      <div className="bottom-home-close">
        
       © created by  asz tea
      </div>    
    
  </div>
  );
};

export default HomePage;
