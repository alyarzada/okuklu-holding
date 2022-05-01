import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// react sensor
import { useInView } from 'react-intersection-observer';

import video from '../images/videoplayback.mp4';
import video2 from '../images/HANLI PAZAR.mp4';

import img3 from '../../ozokproject/images/WhatsApp Image 2022-02-15 at 11.55.13 AM.jpeg';
import img4 from '../images/DSC_2194.JPG';

const HomeCarousel = () => {
  const { ref, inView } = useInView();

  useEffect(() => {
    console.log('inview:', inView);
  });

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'red' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'green' }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="header-section">
      <Slider {...settings}>
        <div className="slider-container">
          <div className="slider-overlay"></div>
          <video src={video} autoPlay loop muted></video>
          <div className="slider-content">
              <span>Xəyal Etmə,</span> İnşa  !
            <div className="slider-btn-container">
              <Link to="/about" className="btn btn-light me-2">
                Haqqımızda
              </Link>
              <Link to="/contact" className="btn btn-outline-light">
                Əlaqə
              </Link>
            </div>
          </div>
        </div>
        <div className="slider-container" ref={ref}>
          <div className="slider-overlay"></div>
          <video src={video2} autoPlay loop muted></video>
          <div className="slider-content text-dark">
              Keyfiyyəti Dəyərində Alın
            <p>Sayta keçid edərək məhsullarımızla tanış ola bilərsiniz</p>
            <div className="slider-btn-container">
              <Link to="/about" className="btn btn-light me-2">
                Haqqımızda
              </Link>
              <Link to="/contact" className="btn btn-outline-light">
                Əlaqə
              </Link>
            </div>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-overlay"></div>
          <img src={img3} />
          <div className="slider-content text-light">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              id qui nihil quas perspiciatis quis nam vitae voluptatibus error
              hic.
            </p>
            <div className="slider-btn-container">
              <Link to="/about" className="btn btn-light me-2">
                Haqqımızda
              </Link>
              <Link to="/contact" className="btn btn-outline-light">
                Əlaqə
              </Link>
            </div>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-overlay"></div>
          <img src={img4} />
          <div className="slider-content text-light">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              id qui nihil quas perspiciatis quis nam vitae voluptatibus error
              hic.
            </p>
            <div className="slider-btn-container">
              <Link to="/about" className="btn btn-light me-2">
                Haqqımızda
              </Link>
              <Link to="/contact" className="btn btn-outline-light">
                Əlaqə
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HomeCarousel;
