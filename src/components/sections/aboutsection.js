import React from 'react';
// import img1 from '../home/about us/images/_DSC7487.JPG';
import {Link} from 'react-router-dom'

const AboutSection = () => {
  return (
    <div id="about-section">
      <header>
        <h1>Haqqımızda</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to='/'><a className='text-light'>Ana səhifə</a></Link>
            </li>
            <li class="breadcrumb-item active text-light" aria-current="page">
              Haqqımızda
            </li>
          </ol>
        </nav>
      </header>
      <main>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-xxl-6 about-content">
              <h2 className="text-dark">Okuklu Holding</h2>
              <hr/>
              <p className="text-dark">
                Azərbaycanda inşaat mallarının topdan və pərakəndə satışı üzrə
                ən böyük satış mərkəzlərindən olan “Okuklu Holding” 2007-cü
                ildən ölkəmizdə fəaliyyət göstərir. Şirkət Azərbaycan
                iqtisadiyyatının dünya bazarında iştirakını təmin etməklə məhsul
                çeşidliliyi və keyfiyyətinin optimallaşdırılmasına çalışır və bu
                istiqamətdə səylərini əsirgəmir. <br /> <br /> Şirkət ilk
                mağazasını Bakı şəhərində açıb. Topdan, pərakəndə və korporativ
                satış sahəsində zəngin iş təcrübəsinə malik “Okuklu Holding”
                təklif etdiyi məhsulun, göstərdiyi xidmətin keyfiyyəti ilə
                rəğbət qazanaraq müştəri bazasını günbəgün artırmaqdadır. Şirkət
                təcrübəli mütəxəssislərdən ibarət peşəkar komanda
                formalaşdıraraq müasir keyfiyyət standartlarına cavab verən
                çoxsaylı və müxtəlif şaxəli layihələr həyata keçirir. Düzgün
                planlama və təklif etdiyi operativ həll yolları sayəsində
                "Okuklu Holdinq" layihələrin dəqiq və zamanında icrasına zəmanət
                verir ki, bu da öz növbəsində şirkətə davamlı olaraq yüksək
                sifarişçi məmnunluğu qazandırır. Şirkətin əsas missiyası
                keyfiyyətli məhsulu uyğun qiymətlərlə təklif edən, əməkdaşlıq
                əlaqələrini genişləndirən, çeşid çoxluğu, üstün xidmət səviyyəsi
                ilə rahatlığı, güvəni və etibarı fəaliyyətində cəmləşdirən,
                davamlı inkişaf edən brend kimi tanınmaqdır.
              </p>
            </div>
            <div className="col-12 col-xxl-5">
              {/* <img src='https://lh3.googleusercontent.com/-Zzc1Wg1HCJI/Xv3_p6Bng4I/AAAAAAAANRI/rpVbNqCr2rUlvDSaJo0Yuo1iJJdi7A3rwCLIBGAYYCw/w1080-h608-p-k-no-v0/' className="img-fluid" alt="" /> */}
              <iframe
              width="100%"
              height="415"
              src="https://www.youtube.com/embed/RLlmMf04Ni0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutSection;
