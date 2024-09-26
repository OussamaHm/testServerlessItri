import PropTypes from "prop-types";
import styles from "./stays.module.css";
import React, { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext"; // Import the language context

import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';

const Stays = ({ className = "" }) => {
    const { language } = useLanguage(); // Get the current language from the context
    const [data, setData] = useState({
        d1: "",
        d2: "",
        d3: "",
        d4: ""
    });

    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        setIsDisabled(true);
    };

    useEffect(() => {
        console.log("Language changed in component Stays.js", language);

        // Load data from the correct JSON file based on the selected language
        let selectedData;
        if (language === 'English') {
            selectedData = englishData.get_data5;
        } else if (language === 'Français') {
            selectedData = frenchData.get_data5;
        } else if (language === 'Deutsch') {
            selectedData = germanData.get_data5;
        }

        // Set the selected data to state
        setData(selectedData);
    }, [language]);

    return (
        <section className={[styles.stays, className].join(" ")}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        <div className={styles.experience}>
                            <h1 className={styles.stayWithItriContainer}>
                                <p className={styles.stayWith}>{data.d1}</p>
                                <p className={styles.itriLiving}>
                                    <i className={styles.itriLiving1}>{data.d2}</i>
                                </p>
                            </h1>
                            <h3 className={styles.eachStayIsContainer}>
                                <p className={styles.eachStayIs}>{data.d3}</p>
                                <p className={styles.eachStayIs}>&nbsp;</p>
                                <p className={styles.eachStayIs}>{data.d4}</p>
                            </h3>
                            <button
                                className={`${styles.stylesecondarySmallfalse} ${isDisabled ? styles.disabledButton : ""}`}
                                onClick={handleClick}
                                disabled={isDisabled}
                            >
                                {isDisabled ? "Not Available Yet" : "Book a Stay"}
                            </button>
                        </div>
                    </div>
                    <img
                        className={styles.sea815134012802Icon}
                        loading="lazy"
                        alt=""
                        src="/sea8151340-1280-2@2x.png"
                    />
                </div>
            </div>
        </section>
    );
};

Stays.propTypes = {
    className: PropTypes.string,
};

export default Stays;
