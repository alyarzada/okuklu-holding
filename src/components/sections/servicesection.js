import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

const ServiceSection = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div id="service-section">
      <div className="overlay"></div>
      <header>
        <h1>Xidmətlərimiz</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">
                <a className="text-light">Ana səhifə</a>
              </Link>
            </li>
            <li class="breadcrumb-item active text-light" aria-current="page">
              Xidmətlərimiz
            </li>
          </ol>
        </nav>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 service-content">
              <h2 className="text-dark">Layihələndirmə</h2>
              <p className="text-dark">
                Layihələndirmə tikinti prosesinin başlanğıc mərhələsidir.
                Şirkətimiz tikiləcək obyektin funksionallığı, təhlükəsizliyi və
                enerji səmərəliliyini təmin edəcək təkliflər təqdim edir və
                layihələndirmə prosesinə xüsusi diqqət yetirir.Layihələndirmə
                mərhələsində tikiləcək binanın tam və ətraflı təsvirini təqdim
                edir, bütün incəlik və xüsusiyyətləri nəzərə alaraq müştərilərin
                tələblərinə cavab verəcək işi ərsəyə gətiririk. Layihə
                konstruktor və texnoloji bölmə tamamilə ən çətin problemləri
                həll edə biləcək sertifikatlı mütəxəssislərdən ibarətdir.
                Mütəxəssislər dünyanın qabaqcıl sənaye ölkələrində mövcud
                texnologiyalarının incəliklərini öyrəniblər.
              </p>
            </div>
            <div className="col-6 d-none d-lg-block text-center">
              <img
                src="https://jsgroup.az/wp-content/uploads/2019/04/layihelendirme.jpg"
                className="img-fluid img-odd"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 d-none d-lg-block text-center ">
              <img
                src="https://ugc.futurelearn.com/uploads/images/ce/43/header_ce431033-a678-4d5f-971f-6eb72417cb51.jpg"
                className="img-fluid img-even"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-12 service-content">
              <h2 className="text-dark">Tikinti</h2>
              <p className="text-dark">
                Peşəkar ustalardan ibarət yüksək tələblərə cavab verən, operativ
                və keyfiyyətli iş bacarığına malik, müasir texnologiyalarla iş
                təcrübəsi olan kadr potensialına malikdir.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12 service-content">
              <h2 className="text-dark">Təmir</h2>
              <p className="text-dark">
                Biz ən qısa zamanda dünya standartlarına uyğun şəkildə evləri və
                ofisləri keyfiyyətli təmir edirik.Təmir zövqünüzə uyğun peşəkar
                komandamız tərifindən yerinə yetirir və təhvil verilir.
              </p>
            </div>
            <div className="col-6 d-none d-lg-block text-center">
              <img
                src="https://teesko.com/wp-content/uploads/2021/09/building-renovation.jpg"
                className="img-fluid img-odd"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 d-none d-lg-block text-center">
              <img
                src="https://danielahomedecorator.com/wp-content/uploads/2020/04/Interior-Design0.jpg"
                className="img-fluid img-even"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-12 service-content">
              <h2 className="text-dark">Dizayn</h2>
              <p className="text-dark">
                Ev, ofis və istənilən obyektinizə aid dizayner həllinin
                işlənməsini təhsilli, işinin mütəxəssisi olan komandamızla tam
                təmin edirik. Dizaynerlərimiz sizə dizayn materiallarının
                kombinasiyasının müəyyən edir və ideal rəng qammasının seçimində
                köməklik edir.Sizə isə baş verən görünüş dəyişikliyinin
                hazırladığımız eskizlər, kompyuter modelləri və icraatda real
                mənzərəsini seyr edib, həzz almaq qalır.
              </p>
            </div>
          </div>
          <div class="row">
            <div className="col-lg-6 col-12 service-content">
              <h2 className="text-dark">Məhsullarımız</h2>
              <p className="text-dark">
                Yenilik və milliliyi ilə hamının diqqətini öz üzərinə toplayan
                alış-veriş mərkəzlərimizin əsas qayəsi ticarət əxlaqı və dünya
                standartlarına uyğun şəkildə hər bir müştərisinə nümunəvi
                xidmətlə geniş seçim imkanı olan məhsullarını (inşaat
                materialları, mebel, məişət əşyaları, hamam aksesuarları,
                laminat və qapıları) öz dəyərində təqdim etməkdir.
              </p>
            </div>
            <div className="col-6 d-none d-lg-block text-center">
              <img
                src="https://www.imexbz.com/wp-content/uploads/2017/06/tiles.jpg"
                className="img-fluid img-odd"
                alt=""
              />
            </div>
            <button className='btn btn-dark w-25 mb-3'>Sayta keçid edin</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceSection;
