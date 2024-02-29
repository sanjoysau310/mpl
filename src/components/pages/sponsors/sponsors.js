import React from "react";
import "./sponsors.css";
import sponsor1 from "../../../assets/images/sponsors/sponsor1.png";

export const Sponsors = () => {
  return (
    <section id="supporters" className="section-with-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Sponsors</h2>
        </div>
        <div
          className="row g-0 supporters-wrap clearfix"
          data-aos="zoom-in"
          data-aos-delay={100}>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img src={sponsor1} className="img-fluid" alt />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img src={sponsor1} className="img-fluid" alt />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img src={sponsor1} className="img-fluid" alt />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img src={sponsor1} className="img-fluid" alt />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img src={sponsor1} className="img-fluid" alt />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img src={sponsor1} className="img-fluid" alt />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img src={sponsor1} className="img-fluid" alt />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
              <img src={sponsor1} className="img-fluid" alt />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
