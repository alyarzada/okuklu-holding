import React, { useEffect } from 'react';
import Areas from '../home/areas/areas';
import Products from '../home/products/products';
import Statistics from './statistics/statistics';
import Media from '../media/media';
import About from './about/about';
import Contact from './contact/contact';
import Partners from './partners/partners';
import HanliPazar from '../hanlipazar/hanlipazar';
import OzokProject from '../ozokproject/ozokproject';
import IgdirResidence from './igdirresidence/igdirresidence';
import HomeCarousel from '../home/header/homeCarousel';

import { BsArrowUpSquareFill } from 'react-icons/bs';

const Home = () => {
  const scrolltoUpHandler = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener('scroll', () => {
    const gotoupBtn = document.querySelector('.gotoup-btn');

    if (window.pageYOffset > 100) {
      gotoupBtn.classList.add('gotoup-active');
    } else {
      gotoupBtn.classList.remove('gotoup-active');
    }
  });

  return (
    <section id="home-section">
      <HomeCarousel />
      <Areas />
      <Products />
      <About />
      {/* <IgdirResidence />
      <HanliPazar /> */}
      <Statistics />
      {/* <OzokProject /> */}
      <Media />
      <Contact />
      {/* <Partners/> */}
      <div className="gotoup-btn" onClick={scrolltoUpHandler}>
        <BsArrowUpSquareFill size={35} color='#FAF0CA' />
      </div>
    </section>
  );
};

export default Home;
