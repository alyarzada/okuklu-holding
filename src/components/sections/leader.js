import React from 'react';
import { Link } from 'react-router-dom';
import yilmazokuklu from './videos/yəlmaz okuklu (1).jpg';

const Leader = () => {
  return (
    <section id="leader-section">
      <header>
        <h1>Xidmətlərimiz</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Ana səhifə</Link>
            </li>
            <li class="breadcrumb-item active text-light" aria-current="page">
              Idarə Heyəti
            </li>
          </ol>
        </nav>
      </header>
      <main className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-12">
              <h3 className='fw-bold'>OKUKLU SÖZÜ</h3>
              <hr/>
              <p>
                Dünyadakı qloballaşma və davamlı hərəkət nəticəsində baş verən
                dəyişikliklər bizim üçün çox mühüm əhəmiyyət kəsb edir. Biz
                kollektiv olaraq öz missiyamızı bir an belə olsun unutmadan Türk
                Dünyası Dövlətlərini bu dinamik coğrafiyada ticarət,
                texnologiya, inşaat, iqtisadiyyat və mədəniyyət baxımından layiq
                olduğu şəkildə təqdim edirik. Son illərdə Türk şirkətlərinin
                həyata keçirdikləri layihələr, investisiyalar bütün dünyaya
                göstərdi ki, bizim buna gücümüz çatır. Yaradılan birliklər,
                atılan addımlarla yeni sərmayələri sürətləndirən, yeni-yeni
                uğurlarla davam edən bir bayraq yarışı olaraq gördüyümüz bu
                prosesdə “Okuklu Holdinq” olaraq uzun bir yol qət etdik və
                yorulmadan özümüzü bu yolun başında görürük. İndiyədək həyata
                keçirdiyimiz tikinti işləri və ticarət dövriyəsi bizi həm ölkə
                daxilində, həm də xaricdə müəyyən məqama yüksəltdi. Bunu
                edərkən, əsas qayğımız keyfiyyətə xələl gətirmədən, müasir,
                dinamik və etibarlı iş yanaşması ilə ən yaxşı məhsul və
                xidmətləri Türk Ticarət Əxlaqına uyğun təklif etmək olmuşdur.
                Ticarət, inşaat, mədəniyyət sektorlarında beynəlxalq təcrübəmiz
                bizi bu sahələrdə çox mühüm koordinatlara apardı. Biz yüksək
                keyfiyyətli məhsulların istehsalı və idxalı ilə yanaşı, ölkəmiz
                və Can Azərbaycan iqtisadiyyatına mühüm töhfələr verir və
                dünyada qeyd etdiyimiz tendensiyalar nəticəsində beynəlxalq
                şirkətlərlə əməkdaşlığa da xüsusi diqqət yetiririk. Bütün bu
                prosesslərdə Ulu Öndər Heydər Əliyevin “İqtisadiyyatı güclü olan
                dövlət hər şeyə qadirdir” aforizmini əldə rəhbər tuturuq. 15
                ildən artıqdır ki, biz qapımızı yeniliklərə, yeni ideyalara və
                tamamilə yeni ideallara açıq saxlamaqla çalışmışıq. Bundan sonra
                da Türk Dünyası, daha gözəl bir dünya, daha xoşbəxt istiqbal
                üçün insanlara, təbiətə, ətraf mühitə olan hörmətimizi itirmədən
                birlik və bərabərlik içərisində çalışmağa davam edəcəyik.
              </p>
              <h4  className='fw-bold text-end'>Yılmaz OKUKLU <br/> Başqan</h4>
            </div>
            <div className="col-lg-5 col-12 yilmaz">
              <img src={yilmazokuklu} className='img-fluid rounded' alt="yilmaz okuklu"></img>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Leader;
