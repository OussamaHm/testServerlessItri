import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./frame-component.module.css";
import { useLanguage } from "./LanguageContext"; // Import the language context

import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';

const Exceptional2 = ({ className = "" }) => {
    const { language } = useLanguage(); // Get the current language from the context
    const [data, setData] = useState({
        p16: "",
        p17: "",
        p18: "",
        p19: "",
    });

    useEffect(() => {
        console.log("Language changed in component Exceptional2.js", language);

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

    // Determine if the German style should be applied
    const isGerman = language === 'Deutsch';

    return (
        <div className={`${styles.valuable} ${className}`} id={"values"}>
            <div className="container">
                <div>
                    <div className={styles.valuableContainerChild} />
                    <div className={styles.valuableContent}>
                        <h1 className={styles.mediumLengthHeroContainer}>
                            <span className={`${styles.tokenisedAccomodationRights} ${isGerman ? styles.germanStyle : ''}`}>
                                {data.p16}
                            </span>
                            <i className={styles.value}>{data.p17}</i>
                            <span className={`${styles.tokenisedAccomodationRights} ${isGerman ? styles.germanStyle : ''}`}>
                                {data.p18}
                            </span>
                        </h1>
                        <h3 className={styles.theseAreWhat}>{data.p19}</h3>
                        <div className={styles.actions}>
                            <div className={styles.stylesecondarySmallfalse}>
                                <div className={styles.contactUsFor}>
                                    <a
                                        href="https://calendly.com/admin-itri/itri-living-concept-explained"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.noUnderline}
                                    >
                                        Express your interest
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Exceptional2.propTypes = {
    className: PropTypes.string,
};

export default Exceptional2;
