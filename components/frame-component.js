import PropTypes from "prop-types";
import React, { useEffect, useState, useRef } from "react";
import styles from "./frame-component.module.css";
import { useLanguage } from "./LanguageContext"; // Import the language context

import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';

const FrameComponent = ({ className = "" }) => {
  const { language } = useLanguage(); // Get the current language from the context
  const [data, setData] = useState({
    title: "",
    title2: "",
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
    p6: "",
    p7: "",
    p8: "",
    p9: "",
    p10: "",
    p11: "",
    p12: "",
    p13: "",
    p14: "",
    p15: "",
    p16: "",
    p17: "",
    p18: "",
    p19: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    console.log("Language changed in component FrameComponent.js", language);

    // Load data from the correct JSON file based on the selected language
    let selectedData;
    if (language === 'English') {
      selectedData = englishData.get_data2;
    } else if (language === 'Français') {
      selectedData = frenchData.get_data2;
    } else if (language === 'Deutsch') {
      selectedData = germanData.get_data2;
    }

    // Set the selected data to state
    setData(selectedData);
  }, [language]);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
      <div ref={sectionRef} className={[styles.image5Parent, className].join(" ")}>
        <div className={`${styles.memberContent} ${!isVisible ? styles.hidden : styles.slideInFromBottom}`}>
          <div className={`${styles.memberContentChild} ${!isVisible ? styles.hidden : styles.slideInFromBottom}`} />
          <div className={styles.contentContainer}>
            <div className={styles.heading2WhyBecomeAMembeParent}>
              <h1 className={`${styles.heading2Container} ${!isVisible ? styles.hidden : styles.slideInFromLeft}`}>
              <span className={styles.heading2Container1}>
                <span className={styles.tokenisedAccomodationRights}>{data.title}</span>
                <i className={styles.itriToken}>{data.title2}</i>
              </span>
              </h1>
              <div className={styles.memberToken}>
                {/* Image */}
                <img
                    style={{ margin: "2px" }}
                    className={`${styles.leonardoPhoenixAHighlyDetaIcon} ${!isVisible ? styles.hidden : styles.slideInFromLeft}`}
                    loading="lazy"
                    alt=""
                    src="/leonardo-phoenix-a-highly-detailed-gold-token-with-a-prominent-1@2x.png"
                />
                {/* Texte */}
                <div className={styles.tokenDescription}>
                  <div className={`${styles.atItrilivingAccomodationsContainer}`}>
                    {data.p1 && (
                        <p className={`${styles.atItrilivingAccomodations} ${styles.mt1} ${!isVisible ? styles.hidden : styles.slideInFromRight}`}>{data.p1} {data.p2}</p>
                    )}
                    <p className={`${styles.blankLine} ${!isVisible ? styles.hidden : styles.slideInFromRight}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>&nbsp;</span>
                    </span>
                    </p>
                    <p className={`${styles.blankLine} ${!isVisible ? styles.hidden : styles.slideInFromRight}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <b>{data.p4}</b>
                    </span>
                    </p>
                    <p className={`${styles.blankLine} ${!isVisible ? styles.hidden : styles.slideInFromRight}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>{data.p5}</span>
                    </span>
                    </p>
                    <p className={`${styles.blankLine} ${!isVisible ? styles.hidden : styles.slideInFromRight}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>
                        {data.p6}
                      </span>
                    </span>
                    </p>
                    <p className={`${styles.blankLine} ${!isVisible ? styles.hidden : styles.slideInFromRight}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>&nbsp;</span>
                    </span>
                    </p>
                    <p className={`${styles.blankLine} ${!isVisible ? styles.hidden : styles.slideInFromRight}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <b>{data.p7}</b>
                    </span>
                    </p>
                    <p className={`${styles.blankLine} ${!isVisible ? styles.hidden : styles.slideInFromRight}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>{data.p8}</span>
                    </span>
                    </p>
                    <p className={`${styles.blankLine} ${!isVisible ? styles.hidden : styles.slideInFromRight}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>{data.p9}</span>
                    </span>
                    </p>
                    <p className={`${styles.blankLine} ${!isVisible ? styles.hidden : styles.slideInFromRight}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>{data.p10}</span>
                    </span>
                    </p>

                    <p className={`${styles.blankLine} ${!isVisible ? styles.hidden : styles.slideInFromRight}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>&nbsp;</span>
                    </span>
                    </p>

                    <p className={`${styles.blankLine} ${!isVisible ? styles.hidden : styles.slideInFromRight}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <b>{data.p12}</b>
                    </span>
                    </p>
                    <p className={`${styles.blankLine} ${!isVisible ? styles.hidden : styles.slideInFromRight}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>{data.p13}</span>
                    </span>
                    </p>
                    <p className={`${styles.blankLine} ${!isVisible ? styles.hidden : styles.slideInFromRight}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>&nbsp;</span>
                    </span>
                    </p>
                    <p className={`${styles.blankLine} ${!isVisible ? styles.hidden : styles.slideInFromRight}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <b>{data.p14}</b>
                    </span>
                    </p>
                    <p className={`${styles.blankLine} ${!isVisible ? styles.hidden : styles.slideInFromRight}`}>
                    <span className={styles.itriTokensHaveTheFollowing}>
                      <span>{data.p15}</span>
                    </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
