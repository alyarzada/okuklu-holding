import React from 'react';
import { Link } from 'react-router-dom';

import lapisimg from '../ceramics/images/lapiss.jpg'

const EachProducts = () => {
  return (
    <div id='eachproducts-section'>
      <div className="overlay"></div>
      <header>
        <h1>Keramoqranitler</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">
                <a className="text-light">Ana səhifə</a>
              </Link>
            </li>
            <li class="breadcrumb-item active text-light" aria-current="page">
              Keramoqranitler
            </li>
          </ol>
        </nav>
      </header>
      <main>
        <div className="container">
            <div className="row p-5">
                <div className="col-6">
                    <img src={lapisimg} className='img-fluid' alt="" />
                </div>
                <div className="col-6">
                    <h1>LAPIS</h1>
                    <hr />
                    <ul>
                        <li className='fw-bold'>Material: <span >Keramoqranit</span></li>
                        <li>Ölçü: <span>60x120</span></li>
                        <li>Rəng: <span>Ağ</span></li>
                        <li>Səthi: <span>Parlaq</span></li>
                    </ul>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default EachProducts;
