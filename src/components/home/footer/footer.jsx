import React from "react";
import { Link } from "react-router-dom";
import { GrInstagram } from "react-icons/gr";
import { FiYoutube } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container text-light text-center">
        <div className="row">
          <div className="col-lg-4">
            <h4>Elaqe Nomrelerimiz</h4>
            <hr />
            <p>+994 50 261-34-74</p>
          </div>
          <div className="col-lg-4">
            <h4>Ünvanlarımız</h4>
            <hr />
            <h6>Dərnəgül filialı (Baş Ofis) : Ziya Bünyadov 77Q küçəsi</h6>
            <h6>Bakmil filialı : Ələsgər Qayıbov 1 küçəsi</h6>
            <h6>Xırdalan filialı : Igdır residence binası</h6>
            <h6>Abşeron filialı : Abşeron Logistika mərkəzi</h6>
          </div>
          {/* change here */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
