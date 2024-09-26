import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import HorizontalBorder from "./horizontal-border";
import styles from "./frame-component5.module.css";
import { useLanguage } from "./LanguageContext";

// Importing JSON data for different languages
import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';

const FrameComponent5 = ({ className = "" }) => {
    const { language } = useLanguage(); // Get the current language from the context
    const [questions, setQuestions] = useState([]);
    const [faqHeader, setFaqHeader] = useState({
        title: { prefix: "", highlight: "" },
        description: ""
    });

    useEffect(() => {
        let selectedData;
        if (language === 'English') {
            selectedData = englishData;
        } else if (language === 'Français') {
            selectedData = frenchData;
        } else if (language === 'Deutsch') {
            selectedData = germanData;
        }

        setQuestions(selectedData.dataFaq || []); // Set the selected questions
        setFaqHeader(selectedData.dataFaqHeader || faqHeader); // Set the selected header data
    }, [language]);

    return (
        <section className={[styles.questionWrapper, className].join(" ")} id="faqs">
            <div className={styles.question}>
                <div className={styles.questionContent}>
                    <div className={styles.questionInfo}>
                        <h1 className={styles.heading2Container}>
                            <b>{faqHeader.title.prefix}</b>
                            <i style={ { margin : "10px"}} className={styles.itrilivingClub}>{faqHeader.title.highlight}</i>
                        </h1>
                        <div className={styles.ifOurMembershipFaqsAreNotWrapper}>
                            <div className={styles.ifOurMembership}>
                                {faqHeader.description}
                            </div>
                        </div>
                        <div className={styles.consultation}>
                            <div className={styles.actions}>
                                <div className={styles.actions3}>
                                    <div className={styles.stylesecondarySmallfalse}>
                                        <div className={styles.consultation1}>
                                            <a
                                                href="https://calendly.com/admin-itri/itri-living-concept-explained"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.noUnderline}
                                            >
                                                Request a call
                                            </a>
                                        </div>
                                        <img
                                            className={styles.vectorIcon}
                                            alt=""
                                            src="/vector-8.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.border}>
                    <div className={styles.fAQList1}>
                        {questions.map((item, index) => (
                            <HorizontalBorder
                                key={index}
                                howDoesItriLivingWork={item.question}
                                answer={item.answer}
                                propWidth="unset"
                                propDisplay="flex"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

FrameComponent5.propTypes = {
    className: PropTypes.string,
};

export default FrameComponent5;
