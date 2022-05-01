import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { gsap } from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
// import img1 from './images/_DSC7487.JPG';

const About = () => {
  gsap.registerPlugin(scrollTrigger);

  useEffect(() => {
    gsap.from('.about-content', {
      duration: 1,
      x: -100,
      opacity: 0,
      scrollTrigger: '.about-content',
      stagger: 0.3,
    });
    gsap.from('.col-lg-5', {
      duration: 1,
      x: 100,
      opacity: 0,
      scrollTrigger: '.about-content',
      stagger: 0.3,
    });
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-6 about-content">
            <h1>Haqqımızda</h1>
            <p>
              Azərbaycanda inşaat mallarının topdan və pərakəndə satışı üzrə ən
              böyük satış mərkəzlərindən olan “Okuklu Holding” 2007-cü ildən
              ölkəmizdə fəaliyyət göstərir. Şirkət Azərbaycan iqtisadiyyatının
              dünya bazarında iştirakını təmin etməklə məhsul çeşidliliyi və
              keyfiyyətinin optimallaşdırılmasına çalışır və bu istiqamətdə
              səylərini əsirgəmir. Şirkət ilk mağazasını Bakı şəhərində açıb.
              Topdan, pərakəndə və korporativ satış sahəsində zəngin iş
              təcrübəsinə malik “Okuklu Holding” təklif etdiyi məhsulun,
              göstərdiyi xidmətin keyfiyyəti ilə rəğbət qazanaraq müştəri
              bazasını günbəgün artırmaqdadır. <br />
              Şirkət təcrübəli mütəxəssislərdən ibarət peşəkar komanda
              formalaşdıraraq müasir keyfiyyət standartlarına cavab verən
              çoxsaylı və müxtəlif şaxəli layihələr həyata keçirir. Düzgün
              planlama və təklif etdiyi operativ həll yolları sayəsində "Okuklu
              Holdinq" layihələrin dəqiq və zamanında icrasına zəmanət verir ki,
              bu da öz növbəsində şirkətə davamlı olaraq yüksək sifarişçi
              məmnunluğu qazandırır. Şirkətin əsas missiyası keyfiyyətli məhsulu
              uyğun qiymətlərlə təklif edən, əməkdaşlıq əlaqələrini
              genişləndirən, çeşid çoxluğu, üstün xidmət səviyyəsi ilə
              rahatlığı, güvəni və etibarı fəaliyyətində cəmləşdirən, davamlı
              inkişaf edən brend kimi tanınmaqdır.
            </p>
            <Link to="/about" className="btn btn-dark">
              Daha Ətraflı
            </Link>
          </div>
          <div className="col-lg-5 d-none d-xl-block">
            <img
              src="https://lh3.googleusercontent.com/-Zzc1Wg1HCJI/Xv3_p6Bng4I/AAAAAAAANRI/rpVbNqCr2rUlvDSaJo0Yuo1iJJdi7A3rwCLIBGAYYCw/w1080-h608-p-k-no-v0/"
              className="img-fluid"
              alt=""
            />  
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
