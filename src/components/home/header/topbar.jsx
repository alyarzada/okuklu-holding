import React from 'react';
import { Link } from 'react-router-dom';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoYoutube } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';
import { AiTwotonePhone } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import { ImFacebook2 } from 'react-icons/im';

import logo from '../images/okuklu.png';

const TopBar = () => {
  return (
    <section className="topbar">
      <div className="container-fluid d-flex align-items-center justify-content-between ">
          <div className='adress-list d-flex text-center gap-3'>
            <p>
              <AiTwotonePhone size="15" color="rgba(255, 255, 255, 0.6)" />
              <span>+994 50 261 34 74</span>
            </p>
            <p>
              <IoMdMail size="15" color="rgba(255, 255, 255, 0.6)" />
              <span>okuklu@gmail.com </span>
            </p>
            <p>
              <ImLocation size="15" color="rgba(255, 255, 255, 0.6)" />
              <span>Ziya Bünyadov 77Q küçəsi</span>
              
            </p>
          </div>
          <div className="social-media-list d-flex gap-3">
            <a href="https://www.instagram.com/hanlipazarofficial/" target="_blank">
              <RiInstagramFill size="1rem" title="instagram" color='rgba(255, 255, 255, 0.6)' />
            </a>
            <a target="_blank" href="https://www.facebook.com/temir.tikinti.ticaret/" >
              <ImFacebook2 size="0.8rem" title="facebook" color='rgba(255, 255, 255, 0.6)'/>
            </a>
            <a target="_blank" href="https://www.youtube.com/channel/UCUFB08LIj9e5VX5xubrWtdA/featured">
              <IoLogoYoutube size="1rem" title="youtube" color='rgba(255, 255, 255, 0.6)' />
            </a>
          </div>
      </div>
    </section>
  );
};

export default TopBar;
