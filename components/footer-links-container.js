import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-scroll';
import styles from "./footer-links-container.module.css"; // Import the CSS module

const FooterLinksContainer = ({ className = "", scrollToConcept, faqRef }) => {
  return (
      <div className={`container ${className} ${styles.linkContainer}`}>
        <div className="row">
          <div className="col-6 col-md-3 mr-md-3 ">
            <h5 className="">Product</h5>
            <div className="d-flex flex-column">
              <Link
                  to="locations"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="d-block mb-2 text-reset"
              >
                Locations
              </Link>
              <Link
                  to="spaces"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="d-block mb-2 text-reset"
              >
                Spaces
              </Link>
              <a href="#" className="d-block text-reset">Community</a>
              <Link
                  to="benefits"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="d-block text-reset"
              >
                Benefits
              </Link>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <h5 className="">Company</h5>
            <div className="d-flex flex-column">
              <Link
                  to="concept"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="d-block text-reset"
              >
                About Us
              </Link>
              <Link
                  to="values"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="d-block text-reset"
              >
                Values
              </Link>
              <a href="#" className="d-block text-reset">Press</a>
              <a href="#" className="d-block text-reset">Sustainability</a>
              <a href="#" className="d-block text-reset">Real Estate Partners</a>
              <a href="#" className="d-block text-reset">Blog</a>
              <a href="#" className="d-block text-reset">Code of Conduct</a>
              <a href="#" className="d-block text-reset">Privacy Policy</a>
              <a href="#" className="d-block text-reset">{`Terms & Conditions`}</a>
            </div>
          </div>
          <div className="col-6 col-md-3 mt-1">
            <h5 className="">Support</h5>
            <div className="d-flex flex-column">
              <a href="#" className="d-block text-reset">Contact Us</a>
              <a href="#" className="d-block text-reset">ITRI Guides</a>
              <Link
                  to="faqs"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="d-block text-reset"
              >
                FAQ
              </Link>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <h5 className="mb-3 mt-1 text-center">Social</h5>
            <div className="d-flex justify-content-center">
              <a  target="_blank"  href={"https://www.facebook.com/share/NByERJXkLKrqnJ6P/?mibextid=LQQJ4d"}>
                <img
                    className="me-2"
                    alt="Facebook"
                    src="/link--facebookicone22a9a0bsvg@2x.png"
                    style={{width: '24px', height: '24px'}}
                />
              </a>

              <img
                  className="me-2"
                  alt="Twitter"
                  src="/link--twittericon2594da59svg.svg"
                  style={{width: '24px', height: '24px' }}
              />
              <img
                  className="me-2"
                  alt="Instagram"
                  src="/link--instagramiconb8d11734svg@2x.png"
                  style={{ width: '24px', height: '24px' }}
              />
              <img
                  className="me-2"
                  alt="LinkedIn"
                  src="/link--linkediniconc7955ce3svg@2x.png"
                  style={{ width: '24px', height: '24px' }}
              />
              <img
                  className="me-2"
                  alt="YouTube"
                  src="/link--youtubeicon932fdd3csvg.svg"
                  style={{ width: '24px', height: '24px' }}
              />
            </div>
          </div>
        </div>
      </div>
  );
};

FooterLinksContainer.propTypes = {
  className: PropTypes.string,
  scrollToConcept: PropTypes.func.isRequired,
};

export default FooterLinksContainer;
