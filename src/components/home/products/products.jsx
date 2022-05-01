import React from 'react';
import keramoqranitler from './images/notte-dark-60x120-f.lap.jpg';
import kafelmetlax from './images/PATARA 34 AZN (3).jpg';
import qapilar from './images/DSC_1713.JPG';
import santexnika from './images/FLORA_GOLD_WHITE.jpg';
import laminat from './images/plint.jpg';
import oboy from './images/1594328553257165f0785e99c94e.jpg';

import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="products-section">
      <div className="container">
        <div className="row g-5">
          {/* col-1 */}
          <div className="col-7">
            <div className="row g-3">
              <div className="col-12 product-item h-10">
                <img src={keramoqranitler} className="img-fluid" alt="" />
                <Link to="/ceramics">
                  <button className="btn btn-light btn-lg">Keramoqranit</button>
                </Link>
              </div>
              <div className="col-6 product-item h-8">
                <img src={kafelmetlax} className="img-fluid" alt="" />
                <button className="btn btn-light btn-lg">Kafel-Metlax</button>
              </div>
              <div className="col-6 product-item h-8">
                <img src={laminat} className="img-fluid" alt="" />
                <button className="btn btn-light btn-lg">Laminat</button>
              </div>
            </div>
          </div>
          {/* col 2 */}
          <div className="col-5">
            <div className="row g-3">
              <div className="col-6 product-item h-20">
                <img src={qapilar} className="img-fluid" alt="" />
                <button className="btn btn-light btn-lg">Qapı</button>
              </div>
              <div className="col-6 product-item h-20">
                <img src={oboy} className="img-fluid" alt="" />
                <button className="btn btn-light btn-lg">Divar kağızı</button>
              </div>
              <div className="col-12 product-item h-24">
                <img src={santexnika} className="img-fluid" alt="" />
                <button className="btn btn-light btn-lg">Santexnika</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
