import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { AppContext } from '../../contextapi';

const Partners = () => {
  const { partnersItems } = useContext(AppContext);

  return (
    <div className="partners-section">
      <Swiper
        modules={[Navigation]}
        spaceBetween={1}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        navigation={true}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
      >
        {partnersItems.map((partnersItem) => {
          const { img } = partnersItem;
          return (
            <SwiperSlide>
              <img src={img} alt="picture" />
            </SwiperSlide>
          );
        })}
        ...
      </Swiper>
    </div>
  );
};

export default Partners;
