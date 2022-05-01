import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../media/images/01.jpg';
import img2 from '../media/images/0500.jpg';
import img3 from '../media/images/c2.jpg';

const Media = () => {
  return (
    <div className="media-section">
      <div className="media-header text-dark">
        <h1 className="text-center mb-5">Media və Xəbərlər</h1>
      </div>
      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="card card1 col-sm-12 col-md-6 col-lg-3 p-0">
            <img src={img3} class="card-img-top" alt="..." />
            <div class="card-body text-start">
              <h5 class="card-title">OZOK Layihesi</h5>
              <Link to="/news/3" className="btn btn-outline-warning">
                Ətraflı
              </Link>
            </div> 
          </div>

          <div className="card card1 col-sm-12 col-md-6 col-lg-3 p-0">
            <img src={img1} class="card-img-top" alt="..." />
            <div class="card-body text-start">
              <h5 class="card-title">Polad Bulbulogluyla</h5>
              <Link to="/news/1" className="btn btn-outline-warning">
                Ətraflı
              </Link>
            </div>
          </div>
          <div className="card card1 col-sm-12 col-md-6 col-lg-3 p-0">
            <img src={img2} class="card-img-top" alt="..." />
            <div class="card-body text-start">
              <h5 class="card-title">Fexriyye xanimla</h5>
              <Link to="/news/2" className="btn btn-outline-warning">
                Ətraflı
              </Link>
            </div>
          </div>
          <div className="card card1 col-sm-12 col-md-6 col-lg-3 p-0">
            <img src={img2} class="card-img-top" alt="..." />
            <div class="card-body text-start">
              <h5 class="card-title">Fexriyye xanimla</h5>
              <Link to="/news/2" className="btn btn-outline-warning">
                Ətraflı
              </Link>
            </div>
          </div>
        </div>
        <div className="media-more-btn d-flex justify-content-center mt-5">
          <Link to="/news" className="btn btn-dark btn-lg">
            Digər Xəbərlər
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Media;
