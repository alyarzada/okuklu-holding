import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import scrollTrigger from '../../../../node_modules/gsap/ScrollTrigger';

import { AiFillProject } from 'react-icons/ai';
import { IoIosConstruct } from 'react-icons/io';
import { MdDesignServices } from 'react-icons/md';
import { FaTruck } from 'react-icons/fa';

const Areas = () => {
  gsap.registerPlugin(scrollTrigger);

  useEffect(() => {
    gsap.from('.service-item', {
      duration: 1,
      x: -30,
      opacity: 0,
      scrollTrigger: '.service-item',
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="service-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="service-item text-center col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
            <div className="service-content">
              <div className="service-icon">
                <AiFillProject size={50} color='#0d501d'/>
              </div>
              <h5>Layihələndirmə</h5>
              <p>
                Layihələndirmə tikinti prosesinin başlanğıc mərhələsidir.
                Şirkətimiz tikiləcək obyektin funksionallığı, təhlükəsizliyi və
                enerji səmərəliliyini təmin edəcək təkliflər təqdim edir və
                layihələndirmə prosesinə xüsusi diqqət yetirir.
              </p>
            </div>

            <Link to="/service">
              <button className="btn btn-dark">Ətraflı</button>
            </Link>
          </div>
          <div className="service-item text-center col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <div className="service-content">
              <div className="service-icon">
                <IoIosConstruct size={50} color='#0d501d'/>
              </div>
              <h5>Tikinti və təmir</h5>
              <p>
                Peşəkar ustalardan ibarət yüksək tələblərə cavab verən, operativ
                və keyfiyyətli iş bacarığına malik, müasir texnologiyalarla iş
                təcrübəsi olan kadr potensialına malikdir.
              </p>
            </div>
            <Link to="/service">
              <button className="btn btn-dark">Ətraflı</button>
            </Link>
          </div>

          <div className="service-item text-center col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <div className="service-content">
              <div className="service-icon">
                <MdDesignServices size={50} color='#0d501d' />
              </div>
              <h5>Dizayn</h5>
              <p>
                Ev, ofis və istənilən obyektinizə aid dizayner həllinin
                işlənməsini təhsilli, işinin mütəxəssisi olan komandamızla tam
                təmin edirik. Dizaynerlərimiz sizə dizayn materiallarının
                kombinasiyasının müəyyən edir və ideal rəng qammasının seçimində
                köməklik edir.
              </p>
            </div>
            <Link to="/service">
              <button className="btn btn-dark">Ətraflı</button>
            </Link>
          </div>
          <div className="service-item text-center col-12 col-sm-6  col-md-4 col-lg-3  col-xl-3">
            <div className="service-content">
              <div className="service-icon">
                <FaTruck size={50} color='#0d501d'/>
              </div>
              <h5>Çatdirilma</h5>
              <p>
                Biz ən qısa zamanda dünya standartlarına uyğun şəkildə evləri və
                ofisləri keyfiyyətli təmir edirik. Təmir zövqünüzə uyğun peşəkar
                komandamız tərifindən yerinə yetirir və təhvil verilir.
              </p>
            </div>
            <Link to="/service">
              <button className="btn btn-dark">Ətraflı</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;
