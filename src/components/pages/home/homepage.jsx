import React, {useEffect, useRef} from 'react';
import './homepage.css';
import waveSvgT from '../../../utilities/home/waveModeWT.svg';
import waveSvgB from '../../../utilities/home/waveModeWB.svg';
import { animateOnScroll } 
  from './../../../animation.js';
import { Link } from 'react-router-dom';


const HomePage = () => {
  
    const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      const observer = animateOnScroll(element, 'fade-in');
      return () => {
        if (observer) observer.disconnect();
      };
    }
  }, []);


  return (
    <div className="homepage">
      <div className="home-content-1">
        <img src={waveSvgT} alt="wave" className="wave" />
        <div className="home-content-text-1 fadeIn" ref={elementRef} >
          <h1>Selamat Datang Di</h1>
          <h1>Z Pack</h1>
          <h3> 
            Kami menyediakan solusi kemasan dan percetakan yang terpercaya. Kami menawarkan berbagai produk berkualitas tinggi yang dirancang khusus untuk memenuhi kebutuhan Anda di berbagai industri. Dengan pengalaman dan dedikasi yang kuat, kami siap membantu bisnis Anda agar tampilan lebih profesional dan menarik
          </h3>
        </div>
        <img src={waveSvgB} alt="wave" className="wave1" />
      </div>
      <div className="container-categori-home">
        <h1 className="tittle-container ">Lihat Categori Produk</h1>
        <Link to="#">
          <div className="card-categori-home">
            <img 
              src="./image/content/bag.jpg" 
              className="img-categori-home"
              alt="paperbag"/> 
            <p className="text-categori-home">PaperBag</p>
          </div>
        </Link>
        <Link to="#">
          <div className="card-categori-home">
            <img 
              src="./image/content/bag.jpg" 
              className="img-categori-home"
              alt="paperbag"/> 
            <p className="text-categori-home">PaperBag</p>
          </div>
        </Link>
        <Link to="#">
          <div className="card-categori-home">
            <img 
              src="./image/content/bag.jpg" 
              className="img-categori-home"
              alt="paperbag"/> 
            <p className="text-categori-home">PaperBag</p>
          </div>
        </Link>
        <Link to="#">
          <div className="card-categori-home">
            <img 
              src="./image/content/bag.jpg" 
              className="img-categori-home"
              alt="paperbag"/> 
            <p className="text-categori-home">PaperBag</p>
          </div>
        </Link>
        
      </div>
      
      
      
      
      
      <div className="b">gshhshshhd
      </div>
    </div>
  );
};

export default HomePage;
