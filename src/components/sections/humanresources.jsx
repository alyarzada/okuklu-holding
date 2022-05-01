import React from 'react';
import {Link} from 'react-router-dom'

const HumanResource = () => {
  return (
    <section id="humanresource-section">
        <header>
        <h1>Insan Resursları siyasətimiz</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">
                <a className="text-light">Ana səhifə</a>
              </Link>
            </li>
            <li class="breadcrumb-item active text-light" aria-current="page">
              İnsan Resurlari Siyasətimiz
            </li>
          </ol>
        </nav>
      </header>
      <main className='py-5'>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <h4 className='fw-bold'>Insan Resurlari Siyasətimiz</h4>
                <hr />
                <p>
                  <span className='fw-bold d-block fs-5'>Prioritet!</span> İşçiləri ilə ortaq bir hədəf istiqamətində hərəkət
                  etməyi hədəfləyən və işçilərinə sosial və iş təhlükəsizliyi üçün
                  ən əlverişli şərtlər altında bir iş mühiti təqdim edən “Okuklu
                  Holdinq” böyük bir ailə quruluşuna qovuşur. İşçilərinin əmək
                  haqlarını performanslarına görə, karyera və məsuliyyətlərini
                  qabiliyyətlərinə görə müəyyənləşdirir, inkişafa açıq dinamik insan
                  resursları siyasəti həyata keçiririk. <span className='fw-bold d-block fs-5 mt-1'>İnkişafa sərmayə qoy!</span> İş
                  təkilfləri və müraciətləri zamanı hər kəsə bərabər hüquqlar verən
                  məsul şəxslərimizə müraciət etməyiniz üçün prosedura da çox sadə
                  və asandır. Etdiyiniz hər bir müraciətə dərhal baxılır və
                  qeydiyyata alınır. <span className='fw-bold d-block fs-5 mt-1'>Birliyimizi gələcəyə daşıyaq!</span> Məhsullarımızın
                  və xidmətlərimizin keyfiyyəti birbaşa iş ortaqlarımızdan,
                  işçilərimizin keyfiyyətindən asılıdır. İnsan resursları barədə
                  anlayışımız, yaxşı təlim keçmiş və kamil insan resurslarını işə
                  cəlb etmək, istedadlar, mövcud potensialdan maksimum istifadə
                  etmək, məhsuldarlığı artırmaq və inkişaf etdirmək üçün
                  formalaşdırılmışdır. Bu anlayışın arxasında, iş birliyinin və
                  həmrəyliyin davamlı olduğu, qərarların ortaq şəkildə verildiyi,
                  davamlı böyüyən, dinamik bir ailə fərdləri dayanır. “Okuklu
                  Holdinq” ailəsi olaraq əcdadımızın əsasını qoyduğu və 1 000 ildən
                  artıq davam edən Ərtoğrul Qazi əmanəti “Hanlı Pazar” brendinin
                  nəsillər boyu davamlılığını qorumağı hədəfləyirik.
                </p>
              </div>
              <div className="col-lg-6 col-12">
                  <img src="https://www.schellhammerbusinessschool.com/wp-content/uploads/Online-Human-Resource-Management.jpg" className='img-fluid rounded' alt="img" />
              </div>
            </div>
          </div>
      </main>
    </section>
  );
};

export default HumanResource;
