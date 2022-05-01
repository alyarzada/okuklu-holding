import React, { useContext, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../contextapi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { Link } from 'react-router-dom';

const EachNews = () => {
  const { code } = useParams();
  const { newsItems } = useContext(AppContext);

  const findItem = newsItems.find((item) => item.id === parseInt(code));

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div id="each-news-section">
      <div className="overlay"></div>
      <header>
        <h1>Media və Xəbərlər</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/" className="text-light">
                Ana səhifə
              </Link>
            </li>
            <li class="breadcrumb-item active text-light" aria-current="page">
              Media və Xəbərlər
            </li>
          </ol>
        </nav>
      </header>
      <main className="mt-5 py-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-6 col-xxl-5">
              <h2>{findItem.title}</h2>
              <p>{findItem.content}</p>
            </div>
            <div className="col-12 col-xl-6 col-xxl-4">
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
                  <img src={findItem.img} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={findItem.img2} alt=''/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={findItem.img3} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={findItem.img4} alt='' />
                </SwiperSlide>
                ...
              </Swiper>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EachNews;
