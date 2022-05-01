import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FaRegBuilding } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { BsTelephoneInbound } from 'react-icons/bs';

const ContactSection = () => {
  const tiles = 'notte nero';

  // spread operator

  let ceramics = {
    name: 'Espina',
    price: 12,
    country: 'Turkey',
  };

  ceramics = {
    ...ceramics,
    country: 'Ankara',
  };

  let color = 'white';

  useEffect(() => {
    console.log(`hello ${tiles}`);
    console.log('it is', ceramics);

    // ternary conditional operators 
    color === 'white' ? console.log('true') : console.log('false');
  }, []);

  return (
    <div id="contact-section">
      <div className="overlay"></div>
      <header>
        <h1>Əlaqə</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">
                <a className="text-light">Ana səhifə</a>
              </Link>
            </li>
            <li class="breadcrumb-item active text-light" aria-current="page">
              Əlaqə
            </li>
          </ol>
        </nav>
      </header>
      <main className="py-5">
        <div className="container">
          <h1 className="mb-4 bg-dark text-light">Ünvanlarımız</h1>
          <div className="row">
            <div className="col-6">
              <div className="adress-info">
                <h4>
                  <FaRegBuilding /> Dərnəgül filialı (Baş Ofis)
                </h4>
                <p>
                  <IoLocationOutline size={26} /> Ziya Bünyadov 77Q küçəsi
                </p>
                <p>
                  {' '}
                  <BsTelephoneInbound /> (050) 261-34-74
                </p>
              </div>
              <hr />
              <div className="adress-info">
                <h4>
                  <FaRegBuilding /> Bakmil filialı
                </h4>
                <p>
                  <IoLocationOutline size={26} /> Ələsgər Qayıbov 1 küçəsi
                </p>
              </div>
              <hr />
              <div className="adress-info">
                <h4>
                  <FaRegBuilding /> Xırdalan filialı
                </h4>
                <p>
                  <IoLocationOutline size={26} /> Igdır residence binası
                </p>
              </div>
              <hr />
              <div className="adress-info">
                <h4>
                  <FaRegBuilding /> Abşeron filialı
                </h4>
                <p>
                  <IoLocationOutline size={26} /> Abşseron Logistika mərkəzi
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactSection;
