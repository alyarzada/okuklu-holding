import React, { useContext, useLayoutEffect, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { AppContext } from '../contextapi';
import axios from 'axios';

const NewsSection = () => {
  // const { newsItems } = useContext(AppContext);
  const [news, setNews] = useState(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });



  useEffect(() => {
    axios
      .get(
        'http://azstock.tk/test.php/template/pages/adminpanel/list.php?api_key=28a224b6-569a-443f-aa70-3b2fa9222c50'
      )
      .then((response) => {
        console.log('axios response', response);
      });
  }, []);

  return (
    <div id="news-section">
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
      <main>
        <div className="mediacart-container py-4">
          <div className="row justify-content-start justify-content-lg-center">
            {news.map((newsItem) => {
              const { id, title, photo } = newsItem;
              return (
                <Link
                  to={`/news/${id}`}
                  className="card col-12 col-lg-6 col-xxl-4 p-0"
                  key={id}
                >
                  <img src={photo} class="card-img-top" alt="picture" />
                  <div class="card-body text-start">
                    <h5 class="card-title">{title}</h5>
                    <Link to={`/news/${id}`} class="btn btn-outline-warning">
                      Ətraflı
                    </Link>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsSection;
