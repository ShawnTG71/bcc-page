import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO Bahamas Community College"
              title="Transforming lives and communities through learning!"
            />
            <p>
              <span className="bold">
                Mission Statement:{" "}
              </span>
              Educating students for career success. BCC
              seeks to make quality education affordable and
              accessible to the community,to provide
              leadership in the business world, in the
              global maritime industry while supporting the
              economic development of The Bahamas.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW{" "}
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW COURSE{" "}
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
