import React from "react";
import "../assets/Footer/Footer.css";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footerCol">
          <div className="Box">
            <h3>Aulia - Packaging International</h3>
            <p>
              You will gain from our collective expertise and comprehensive
              offering from all different parts of our group – folding cartons,
              trays, cups, flexible materials, system solutions, leaflets,
              labels and much more. We are uniquely positioned to support the
              development of your company with innovative packaging solutions
              which meet the needs of today and tomorrow.
            </p>
          </div>
          <div className="Box">
            <div className="content">
              <h3>Contact us</h3>
              <p>Give us a call at: +46 46 287 33 00</p>
              <p>Email us at: info@ar-packaging.com</p>
              <a href="#" className="MapBtn">
                View on map
              </a>
              <AiFillInstagram className="socialBtns" />
              <AiFillFacebook className="socialBtns" />
              <AiFillTwitterCircle className="socialBtns" />
              <AiFillLinkedin className="socialBtns" />
            </div>
          </div>
          <div className="Box">
            <h3>Contact us</h3>
            <p>
              Subscribe to our newsletter and get the latest news and product
              updates straight to your inbox!
            </p>
            <p>
              We will handle your information with care according to GDPR.
              Please read our Privacy policy
            </p>
            <div className="subscribe">
              <input type="text" placeholder="Enter email here" />
              <a href="#" className="subscribe">
                Subscribe us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
