import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./spaces.module.css";
import LocationSlider from "./LocationSlider";
import styles2 from "./stays.module.css";
import Locations from "./Locations";
import { useLanguage } from "./LanguageContext"; // Assuming you have a LanguageContext

import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';

const Spaces = ({ className = "" }) => {
    const { language } = useLanguage(); // Get the current language
    const [data, setData] = useState({});

    useEffect(() => {
        // Load the appropriate language data
        let selectedData;
        if (language === 'English') {
            selectedData = englishData.dataSpaces;
        } else if (language === 'Français') {
            selectedData = frenchData.dataSpaces;
        } else if (language === 'Deutsch') {
            selectedData = germanData.dataSpaces;
        }
        setData(selectedData);
    }, [language]);

    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        setIsDisabled(true);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const imageStyle = {
        width: '100%',
        height: '300px',
        objectFit: 'cover',
        borderRadius: '8px',
        backgroundPosition: 'center',
    };

    return (
        <section className={[styles.spaces, className].join(" ")}>
            <div className={styles.wrapper}>
                <div className={styles.exploreItrilivingSpacesParent}>
                    <h1 className={styles.exploreItrilivingSpaces} id="test1">
                        {data.exploreTitle}
                    </h1>
                    <h1 className={styles.toBeFound}>
                        {data.subTitle}
                    </h1>
                    <h3 className={styles.aPlaceTo}>
                        {data.description}
                    </h3>
                </div>

                <Locations/>
                <div className={styles.booking}>
                    <button
                        className={`${styles2.stylesecondarySmallfalse} ${isDisabled ? styles2.disabledButton : ""}`}
                        onClick={handleClick}
                        disabled={isDisabled}
                    >
                        {isDisabled ? data.buttonDisabledText : data.bookButtonText}
                    </button>
                </div>

                <div className={styles.locations} id="locations">
                    <h1 className={styles.locationsUnderConsideration}>
                        {data.locationsTitle}
                    </h1>

                    <h1 className={styles.makeItriResidencesContainer}>
                        <p className={styles.makeItriResidences}>
                            {data.residencesTitle}
                        </p>

                    </h1>
                    <LocationSlider/>
                </div>
            </div>
        </section>
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', right: '10px' }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
            onClick={onClick}
        />
    );
};

Spaces.propTypes = {
    className: PropTypes.string,
};

export default Spaces;
