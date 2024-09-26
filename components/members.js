import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card1 from "./card1";
import styles from "./members.module.css";

import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';
import { useLanguage } from "./LanguageContext"; // Assuming you have a language context

const Members = ({ className = "" }) => {
    const { language } = useLanguage(); // Get the current language
    const [data, setData] = useState({ title: {}, cards: [] });

    useEffect(() => {
        let selectedData;
        if (language === 'English') {
            selectedData = englishData.members;
        } else if (language === 'Français') {
            selectedData = frenchData.members;
        } else if (language === 'Deutsch') {
            selectedData = germanData.members;
        }
        setData(selectedData);
    }, [language]);

    return (
        <div className={[styles.members, className].join(" ")}>
            <div className={styles.membersChild} />
            <h1 className={styles.mediumLengthHeroContainer}>
                <p className={styles.whatMakesOur}>{data.title.part1}</p>
                <p className={styles.trulyAuthentic}>
                    <span className={styles.truly}>{`${data.title.part2} `}</span>
                    <i className={styles.authentic}>{data.title.part3}</i>
                </p>
            </h1>
            <div className={styles.row}>
                {data.cards.map((card, index) => (
                    <Card1
                        key={index}
                        placeholderImage={card.image}
                        strongCommunityAnd={card.text}
                        propColor={card.color} // Assuming cards have a color property
                    />
                ))}
            </div>
        </div>
    );
};

Members.propTypes = {
    className: PropTypes.string,
};

export default Members;
