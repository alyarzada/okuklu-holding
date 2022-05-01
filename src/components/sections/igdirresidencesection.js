import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from '../home/igdirresidence/_DSC7487.JPG';
import img2 from '../home/igdirresidence/_DSC7529.JPG';
import img3 from '../home/igdirresidence/_DSC7495.JPG';

const IgdirResidenceSection = () => {
  return (
    <section id="igdir-residence-section">
      <header>
        <h1>Igdir Residence</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">
                <a className="text-light">Ana səhifə</a>
              </Link>
            </li>
            <li class="breadcrumb-item active text-light" aria-current="page">
              IgdirResidence
            </li>
          </ol>
        </nav>
      </header>
      <main className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <h2>Igdir Residence</h2>
              <hr />
              <p>
                7 mərtəbəli (6 mərtəbə yaşayış olmaqla) “IGDIR RESIDECE” yaşayış
                binası, Bakı-Sumqayıt yolu üzrə, “Riyad”TM ilə üzbəüz, “Abşeron
                Gənclər Şəhərciyi”-nin yanında yerləşir. Bina 2 blokdan
                ibarətdir. Hər blok liftlə təhciz edilib.* 1-ci mərtəbə qeyri
                yaşayış sahəsidir və komerssiya məqsədləri üçün yararlıdır.
                2–7-ci mərtəbələr yaşayış üçün nəzərdə tutulub. Hər mərtəbədə 12
                mənzil olmaqla, ümumi mənzil sayı 72. Mənzillər 1 və 2
                otaqlıdırlar. Hər blokda 36 mənzil olmaqla, bir mərtəbədə ümumi
                dəhlizə 6 mənzilin çıxışı var. Binanın hazırlıq vəziyyəti - 80%.
                <br />
                <br />
                Yaşayış sahələri: 1 otaqlı mənzillərin ümumi sayı – 12; 2 otaqlı
                mənzillərin ümumi sayı – 60; Mənzillərdə tavan hündürlüyü –
                3,7m; Ümumi yaşayış sahəsi – 5267,4m2; Satış qiyməti –
                800azn/m2; Sənəd – Çıxarış.
                <br />
                <br />
                Qeyri yaşayış sahəsi: 1-ci mərtəbə; Təmir olunub. İsti döşəməli;
                Çıxışı maqistral yola (E-119); Tavan hündürlüyü – 4,2m; Sahəsi –
                808m2; Satış qiyməti – 2.500azn/m2 (start); Sənəd – Çıxarış.
                Zirzəmi (parkinq); Çıxışı həyətə; Tavan hündürlüyü – 4,2m;
                Sahəsi – 973m2.
                <br />
                <br />
                Xüsusi təklif: Binanın tam satışı mümkündür. Sənədlər
                qaydasıdadır. Satış qiyməti – Danışıqla.
                <br />
                <br />
                ƏLAQƏ: (+99455) 773-15-59 (Mobil, WhatsApp, Telegram)
              </p>
            </div>
            <div className="col-12 col-lg-8">
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
                <SwiperSlide>
                  <img src={img1}  className="img-fluid" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default IgdirResidenceSection;
