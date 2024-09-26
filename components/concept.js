import React, { useEffect, useState, useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./concept.module.css";
import { useLanguage } from "./LanguageContext"; // Correct import

import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';

const Concept = forwardRef(({ className = "" }, ref) => {
  const [data, setData] = useState({
    title: "",
    title2: "",
    p1: "",
    p2: "",
    p3: "",
    p4: ""
  });

  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const sectionRef = ref || useRef(null); // Use the forwarded ref or create a new ref
  const { language } = useLanguage(); // Get the current language from the context

  useEffect(() => {
    console.log("language changed in component concept.js", language);

    // Load data from the correct JSON file based on the selected language
    let selectedData;
    if (language === 'English') {
      selectedData = englishData.get_data1;
    } else if (language === 'Français') {
      selectedData = frenchData.get_data1;
    } else if (language === 'Deutsch') {
      selectedData = germanData.get_data1;
    }

    // Set the selected data to state
    setData(selectedData);
  }, [language]);

  // Intersection Observer to trigger animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger the animation when visible
            observer.disconnect(); // Disconnect the observer once triggered
          }
        },
        { threshold: 0.8 } // Adjust as necessary, 80% visibility
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the section
    }

    return () => observer.disconnect(); // Cleanup the observer
  }, [sectionRef]);

  return (
      <section ref={sectionRef} className={[styles.concept, className].join(" ")} id={"concept"}>
        <div className={styles.itriLivingConceptParent}>
          <h1 className={"test"}>
          <span className={styles.itriLivingConceptContainer1}>
            <span className={styles.itriLiving}>{data.title}</span>
            <i style={{ margin : "3px"}} className={styles.concept1}>{data.title2}</i>
          </span>
          </h1>
          <div className={styles.conceptContent}>
            <div className={styles.contentContainerWrapper}>
              <div
                  className={`${styles.contentContainer} ${isVisible ? styles.slideInFromLeft : ""}`}
              >
                <div className={styles.itrilivingIsAContainer}>
                  <p className={styles.itrilivingIsA}>{data.p1}</p>
                  <p className={styles.itrilivingIsA}>&nbsp;</p>
                  <p className={styles.itrilivingIsA}>{data.p2}</p>
                  <p className={styles.itrilivingIsA}>&nbsp;</p>
                  <p className={styles.itrilivingIsA}>{data.p3}</p>
                  <p className={styles.itrilivingIsA}>&nbsp;</p>
                  <p className={styles.itrilivingIsA}>{data.p4}</p>
                </div>
                <div className={styles.requestCall}>
                  <b className={styles.requestACallContainer}>
                    <a
                        href="https://calendly.com/admin-itri/itri-living-concept-explained"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.buttonContainer}
                        style={{ textDecoration: 'none' }} // Inline style as an option
                    >
                      <b className={styles.requestACallContainer}>
                        <span className={styles.aCall}>Request a Call</span>
                      </b>
                    </a>
                  </b>
                </div>
              </div>
            </div>
            <img
                className={`${styles.sea815134012801Icon} ${isVisible ? styles.slideInFromRightToLeft : ""}`}
                loading="lazy"
                alt=""
                src="/sea8151340-1280-1@2x.png"
            />
          </div>
        </div>
      </section>
  );
});

Concept.propTypes = {
  className: PropTypes.string,
};

export default Concept;
