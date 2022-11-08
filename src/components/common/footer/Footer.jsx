import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>
              Newsletter - Stay tune and get the latest
              update
            </h1>
            <span></span>
          </div>
          <div className="right row">
            <input
              type="text"
              placeholder="Enter email address"
            />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>BAHAMAS COMMUNITY COLLEGE</h1>
            <span>BCC EAGLES</span>
            <p>
              Transforming lives and communities through
              learning.
            </p>

            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>All Courses</li>
              <li>About</li>
              <li>Tuition</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                Address: Suite 3B Kipling Building,
                Freeport, Grand Bahama, Bahamas.
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                242-819-2221 or 242-602-5188
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                bahamascommunitycollege@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2022 All rights reserved | This GCoder
          Template was built by Shawn Gardiner
        </p>
      </div>
    </>
  );
};

export default Footer;
