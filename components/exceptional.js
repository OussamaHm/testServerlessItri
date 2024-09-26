import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styles from "./exceptional.module.css";
import { useLanguage } from "./LanguageContext"; // Import the language context

import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';

const Exceptional = ({ className = "" }) => {
  const { language } = useLanguage(); // Get the current language from the context
  const [data, setData] = useState({
    b1: "",
    b2: "",
    b3: "",
    b4: "",
    b5: ""
  });

  useEffect(() => {
    console.log("Language changed in component Exceptional.js", language);

    // Load data from the correct JSON file based on the selected language
    let selectedData;
    if (language === 'English') {
      selectedData = englishData.get_data3;
    } else if (language === 'Français') {
      selectedData = frenchData.get_data3;
    } else if (language === 'Deutsch') {
      selectedData = germanData.get_data3;
    }

    // Set the selected data to state
    setData(selectedData);
  }, [language]);

  return (
      <section className={[styles.exceptional, className].join(" ")} id={"benefits"}>
        <div className={styles.exceptionalContentParent}>
          <div className={styles.exceptionalContent}>
            <h1 className={styles.mediumLengthHeroContainer}>
              <span className={styles.benefitsToBe}>{data.b1}</span>
              <i className={styles.customResorts}>{data.b2}</i>
            </h1>
            <div className={styles.actions}>
              <div className={styles.stylesecondarySmallfalse}>
                <div className={styles.contactUsFor}>
                  <a
                      href="https://calendly.com/admin-itri/itri-living-concept-explained"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.noUnderline} // Ensure there's no underline
                  >
                    Express your interest
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h3 className={styles.exceptionalLocationBeachfroContainer}>
            <p className={styles.exceptionalLocationBeachfro}>
              <i>{data.b3}</i>
            </p>
            <p className={styles.authenticAccommodationFor}>{data.b4}</p>
            <p className={styles.authenticAccommodationFor}>&nbsp;</p>
            <p className={styles.stateOfTheArtFacilities}>{data.b5}</p>
          </h3>
        </div>
      </section>
  );
};

Exceptional.propTypes = {
  className: PropTypes.string,
};

export default Exceptional;
