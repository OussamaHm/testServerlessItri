import PropTypes from "prop-types";
import styles from "./frame-component4.module.css";
import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "./LanguageContext"; // Import the language context

import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';

const FrameComponent4 = ({ className = "" }) => {
  const { language } = useLanguage(); // Get the current language from the context
  const [data, setData] = useState({
    f1: "",
    f2: "",
    f3: "",
    f4: "",
    f5: "",
    f6: "",
    f7: "",
    f8: "",
    f9: "",
    f10: "",
    f11: "",
    f12: "",
    f13: "",
    f14: "",
    f15: "",
    f16: ""
  });

  const [inView, setInView] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    console.log("Language changed in component FrameComponent4.js", language);

    // Load data from the correct JSON file based on the selected language
    let selectedData;
    if (language === 'English') {
      selectedData = englishData.get_data7;
    } else if (language === 'Français') {
      selectedData = frenchData.get_data7;
    } else if (language === 'Deutsch') {
      selectedData = germanData.get_data7;
    }

    // Set the selected data to state
    setData(selectedData);
  }, [language]);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // Stop observing after the animation has been triggered
          }
        },
        { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
      <section
          className={[styles.partnershipWrapper, className].join(" ")}
          ref={componentRef}
      >
        <div className={styles.partnership}>
          <div className={styles.partnershipContent}>
            <div
                className={`${styles.partnershipInfo} ${
                    inView ? styles.slideInRight : ""
                }`}
            >
              <h1 className={styles.itrinftPartnershipWithContainer}>
              <span className={styles.itrinftPartnershipWithContainer1}>
                <div className={styles.itrinftPartnershipWith}>
                  <b>{data.f1}</b>
                </div>
                <div className={styles.itriliving}>
                  <i className={styles.itriliving1}>{data.f2}</i>
                </div>
              </span>
              </h1>
              <div className={styles.partnershipDescription}>
                <div className={styles.itrilivingHasDevelopedContainer}>
                  <div className={styles.itrinftPartnershipWith}>{data.f3}</div>
                  <div className={styles.itrinftPartnershipWith}>&nbsp;</div>
                  <div className={styles.itrinftPartnershipWith}>{data.f4}</div>
                  <div className={styles.itrinftPartnershipWith}>&nbsp;</div>
                  <div className={styles.itrinftPartnershipWith}>{data.f5}</div>
                </div>
              </div>
            </div>
            <img
                className={styles.valentinLacosteGzu0bAe2ckUIcon}
                loading="lazy"
                alt=""
                src="/valentinlacostegzu0b-ae2ckunsplash-1@2x.png"
            />
          </div>
          <div className={styles.islandArticle}>
            <img
                className={styles.faitesVosValisesPourCesI}
                loading="lazy"
                alt=""
                src="/faites-vos-valises-pour-ces-iles-mediterraneennes-1@2x.png"
            />
            <div className={styles.commitment}>
              <div
                  className={`${styles.commitmentContent} ${
                      inView ? styles.slideInLeft : ""
                  }`}
              >
                <h1 className={styles.itrilivingCommitmentToContainer}>
                <span>
                  <div className={styles.itrinftPartnershipWith}>
                    <i className={styles.itriliving2}>{data.f6}</i>
                    <b>{data.f7}</b>
                  </div>
                  <div className={styles.itrinftPartnershipWith}>
                    <b>{data.f8}</b>
                  </div>
                </span>
                </h1>
                <div className={styles.weAreDedicatedContainer}>
                <span className={styles.itrinftPartnershipWithContainer1}>
                  <div className={styles.itrinftPartnershipWith}>{data.f9}</div>
                  <div className={styles.itrinftPartnershipWith}>&nbsp;</div>
                  <div className={styles.itrinftPartnershipWith}>
                    <i className={styles.ourCommitmentTo}>{data.f10}</i>
                    <span>&nbsp;</span>
                  </div>
                  <ol className={styles.exclusiveAccommodationOffers}>
                    <li className={styles.continuousResortExpansion}>
                      <span>
                        <b className={styles.exclusiveAccommodationOffers2}>
                          {data.f11}
                        </b>
                        <span
                            className={styles.exclusiveAccommodationOffers2}
                        >
                          &nbsp;
                        </span>
                        <span className={styles.eachNftHolder}>
                          {data.f12}
                        </span>
                      </span>
                    </li>
                    <li className={styles.continuousResortExpansion}>
                      <span>
                        <b className={styles.exclusiveAccommodationOffers2}>
                          {data.f13}
                        </b>
                        <span
                            className={styles.exclusiveAccommodationOffers2}
                        >
                          &nbsp;
                        </span>
                        <span className={styles.wePledgeTo}>{data.f14}</span>
                      </span>
                    </li>
                    <li className={styles.continuousResortExpansion}>
                      <span>
                        <b className={styles.exclusiveAccommodationOffers2}>
                          {data.f15}
                        </b>
                        <span
                            className={styles.exclusiveAccommodationOffers2}
                        >
                          &nbsp;
                        </span>
                        <span className={styles.wePledgeTo}>{data.f16}</span>
                      </span>
                    </li>
                  </ol>
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
