import React, { useEffect } from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { gsap } from 'gsap';
import scrollTrigger from '../../../node_modules/gsap/ScrollTrigger';

import video1 from './images/274179825_664410251548972_7422539072148380147_n.mp4';
import image2 from './images/h- .png';

const HanliPazar = () => {
  gsap.registerPlugin(scrollTrigger);

  useEffect(() => {
    gsap.from('.hanlipazar-content', {
      duration: 1,
      x: -100,
      opacity: 0,
      scrollTrigger: '.hanlipazar-content',
      stagger: 0.3,
    });

    gsap.from('.video', {
      duration: 1,
      x: 100,
      opacity: 0,
      scrollTrigger: '.hanlipazar-content',
      stagger: 0.3,
    });
  }, []);

  return (
    <section className="hanlipazar">
      <div className="container">
        <div className="row content align-items-center">
          <div className="col-12 col-lg-6 hanlipazar-content">
            <img src={image2} alt="" className="logo" />
            <p>
              “Hanlı Pazar” - “Okuklu Holdinq” nəznində yaradılan ilk Türk
              Dünyası Milli Brendidir. Bir brend olaraq qısa müddət ərzində
              keyfiyyət və özünə məxsusluğu ilə satış bazarında fərqlilik
              yaradıb. Yenilik və milliliyi ilə hamının diqqətini öz üzərinə
              toplayan alış-veriş mərkəzlərimizin əsas qayəsi ticarət əxlaqı və
              dünya standartlarına uyğun şəkildə hər bir müştərisinə nümunəvi
              xidmətlə geniş seçim imkanı olan məhsullarını (inşaat
              materialları, mebel, məişət əşyaları, hamam aksesuarları, laminat
              və qapıları) öz dəyərində təqdim etməkdir.
            </p>
            <p>
              “Hanlı Pazar” brendinin tarixi keçmişinə nəzər salaraq qeyd
              etməliyik ki, Han adı biz qədim türklərdə hökmdarlara verilən bir
              başlıqdır. Digər tərəfdən, bu başlıq kağan və ya kaan sözündəndir
              və hakan adının bir qısaltmasıdır. Burada bir məqamı da qeyd edək
              ki, bazarın müqəddəsliyi türk törəsindən gəlir və dinimizdə də
              halal ticarət savab sayılır. İlk “Hanlı Pazar” Bilge Kağan
              dönəmində yarandı və o dönəmdən sonra türklərin demək olar ki,
              bütün dövlətlərində bu mərkəzlərə rast gəlmək mümkündür.
            </p>
            <button className="btn btn-lg text-light mt-2">
              Sayta keçid edin <AiOutlineDoubleRight />
            </button>
          </div>
          <div className="col-12 mt-4 col-lg-6 video">
            <video src={video1} muted autoPlay loop controls></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HanliPazar;
