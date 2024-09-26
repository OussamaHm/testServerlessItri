import PropTypes from "prop-types";
import styles from "./frame-component2.module.css";
import React, { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext"; // Import the language context

import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';

const FrameComponent2 = ({ className = "" }) => {
  const { language } = useLanguage(); // Get the current language from the context
  const [data, setData] = useState({
    e1: "",
    e2: "",
    e3: "",
    e4: "",
    e5: "",
    e6: "",
    e7: "",
    e8: "",
    e9: ""
  });

  useEffect(() => {
    console.log("Language changed in component FrameComponent2.js", language);

    // Load data from the correct JSON file based on the selected language
    let selectedData;
    if (language === 'English') {
      selectedData = englishData.get_data6;
    } else if (language === 'Français') {
      selectedData = frenchData.get_data6;
    } else if (language === 'Deutsch') {
      selectedData = germanData.get_data6;
    }

    // Set the selected data to state
    setData(selectedData);
  }, [language]);

  return (
      <section className={[styles.contentWrapper, className].join(" ")}>
        <div className={styles.content}>
          <div className={`${styles.content1} ${styles.responsiveText}`}>
            <h1 className={styles.reminder}>{data.e1}</h1>
            <div className={styles.pleaseNoteThatContainer}>
              <p className={styles.pleaseNoteThat}>{data.e2}</p>
              <p className={styles.pleaseNoteThat}>&nbsp;</p>
              <p className={styles.howeverWeHave}>{data.e3}</p>
              <p className={styles.pleaseNoteThat}>&nbsp;</p>
              <p className={styles.pleaseNoteThat}>{data.e4}</p>
              <p className={styles.pleaseNoteThat}>&nbsp;</p>
              <p className={styles.pleaseNoteThat}>{data.e5}</p>
              <p className={styles.pleaseNoteThat}>&nbsp;</p>
              <p className={styles.pleaseNoteThat}>{data.e6}</p>
            </div>
          </div>
          <div className={styles.content2}>
            <div className={styles.commitment}>
              <div className={styles.commitmentChild} />
              <div className={styles.weAreCommittedContainer}>
                <b>{data.e7}</b>
                <i className={styles.tailorMade}>{data.e8}</i>
                <b>{data.e9}</b>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
