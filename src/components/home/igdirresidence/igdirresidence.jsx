import React from 'react';
import {Link} from 'react-router-dom' 

import img1 from '../igdirresidence/_DSC7487.JPG';
import img2 from '../igdirresidence/_DSC7529.JPG';
import img3 from '../igdirresidence/_DSC7495.JPG';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const IgdirResidence = () => {
  return (
    <section className="igdirresidence-section">
      <div className="igdir-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="text-light mb-4">IGDIR RESIDENCE</h1>
            <p className="text-light">
              Şəhərimizin səfalı guşələrindən olan, havasının təmizliyi ilə
              seçilən ərazidə tikilmiş yaşayış binamızda fərqli ölçülü mənzillər
              təklif edirik. Binanın bilavasitə yaxınlığında iri ticarət, idman
              və sağlamlıq mərkəzləri, müasir tələblərə cavab verən tibb
              məntəqəsi, uşaqlarınız üçün rahat və ən əsası evinizə yaxın bağça
              və məktəb. Avtomobil dayanacağı, həmçinin ticarət və iaşə
              obyektləri də fəaliyyət göstərir. Yaşayış binasında sakinlər üçün
              çoxillik ağaclardan və yaşıllıqdan ibarət geniş park salınacaq, və
              istirahət güşələri olacaq. Əmin olun ki, müştərilərimiz üçün
              arzuladıqları gözəl şəraiti yaratmışıq. Xəyalını qurduğunuz geniş
              və yaşıl həyət, uşaqlar üçün oyun zonaları hamısı burada!
              <br /> <br /> 7 mərtəbəli (6 mərtəbə yaşayış olmaqla) “IGDIR
              RESIDENCE” yaşayış binası, Bakı-Sumqayıt yolu üzrə, “Riyad”TM ilə
              üzbəüz, “Abşeron Gənclər Şəhərciyi”-nin yanında yerləşir. 
            </p>
            <Link to='/igdirresidencesection' className="btn btn-light">Daha Ətraflı</Link>
          </div>
          <div className="col-lg-6 mt-4">
            <Swiper
                modules={[Navigation]}
                spaceBetween={1}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={img1} className="img-fluid" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img2}  className="img-fluid" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img3}  className="img-fluid" alt="" />
                </SwiperSlide>
              </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IgdirResidence;
