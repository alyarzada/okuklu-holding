import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import scrollTrigger from '../../../node_modules/gsap/ScrollTrigger';
import { AiOutlineDoubleRight } from 'react-icons/ai';

import img1 from '../ozokproject/images/WhatsApp Image 2022-02-15 at 11.55.13 AM.jpeg';

const OzokProject = () => {
  gsap.registerPlugin(scrollTrigger);

  useEffect(() => {
    gsap.from('.ozok-content', {
      duration: 1,
      x: -100,
      opacity: 0,
      scrollTrigger: '.ozok-content',
      stagger: 0.3,
    });
    gsap.from('.ozok-img', {
      duration: 1,
      x: 100,
      opacity: 0,
      scrollTrigger: '.ozok-img',
      stagger: 0.3,
    });
  }, []);

  return (
    <section className="ozok-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ozok-content">
            <h1>ÖZOK Layihəsi</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis veniam adipisci error totam alias hic, dolor excepturi
              dolorem quas at, aliquam dolores nisi minima iusto. Saepe
              assumenda sit eligendi quidem.
            </p>
            <a href="http://www.ozcelikmetal.com/" target="_blank">
              <button className="btn btn-light btn-lg">
                Sayta keçid edin <AiOutlineDoubleRight />
              </button>
            </a>
          </div>
          <div className="col-lg-6 mt-4 ozok-img">
            <img src={img1} className="img-fluid" alt="ozok images" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OzokProject;
