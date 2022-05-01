import React from 'react';
import video1 from '../sections/videos/hanlipazarticaret+InstaUtility_-00_CMrGVehAl0B_11-163175825_223323732868053_5593288737508464543_n.mp4';
import { Link } from 'react-router-dom';

const WhyUs = () => {
  return (
    <section id="whyus-section">
      <header>
        <h1>Xidmətlərimiz</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Ana səhifə</Link>
            </li>
            <li class="breadcrumb-item active text-light" aria-current="page">
              Niyə Biz?
            </li>
          </ol>
        </nav>
      </header>
      <main className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h3 className="fw-bold">Niyə Biz?!</h3>
              <hr />
              <p>
                <span>• Büdcəniz üçün ən uyğun qiymətlər!</span> Biz sizə
                istəkləriniz üzrə bütün variantlar, xüsusi endirim
                kampaniyalarımız, hər bir məhsulun keyfiyyətinə dair ətraflı
                məlumat verəcək və siz zövqünüzə uyğun seçim edə biləcəksiz.
                <span>• Rahat bir universal</span>
                satış! “Hanlı Pazara” hər səfəriniz sizdə hər dəfə fərqli və bir
                o qədər də xoş bir təəssürat yaradacaq. Gülərüz və öz işinin
                peşəkarı mütəxəssislərimiz ilə həm vaxtınıza həm də pulunuza
                qənaət edəcəksiz.
                <span>• Topdan qiymətinə pərakəndə!</span> Bizim əməkdaşlar
                maraq dairənizdə olan və diqqətinizi çəkən hər məhsulumuz
                barəsində sizi məlumatlandıraraq seçimlərinizin daha
                məqsədəuyğun olmasını təmin edir, alış-verişinizlə bağlı hər bir
                istəyinizə uyğun təklif paketi hazırlayaraq xidmətinizdə
                dayanırlar.
                <span>• Maksimum seçim!</span> Biz sizin üçün 10 min kvadrat
                metr ərazidə ən geniş seçim imkanlarını təqdim edirik. Dünyanın
                ən tanınmış müxtəlif brendlərinin məhsullarını özündə ehtiva
                edən vitrinlərimizlə əldə edə bilməyəcəyiniz məhsul qalmayacaq.
                Təklif bizdən seçim sizdən.
                <span>• Güvən!</span> Fəaliyyət göstərdiyimiz müddətdə
                müştərilərə göstərdiyimiz şəffaf və keyfiyyətli xidmətimizlə hər
                birinizin güvənini qazanmışıq. “Hanlı Pazar” kollektivi olaraq
                unikal satış təklifimizlə istər real, istər virtual aləmdə yenə
                də siz dəyərli müştərilərimizin xidmətinizdəyik…
              </p>
            </div>
            <div className="col-lg-6 col-12">
              <video src={video1} autoPlay loop controls></video>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default WhyUs;
