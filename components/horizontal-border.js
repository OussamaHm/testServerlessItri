import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import styles from "./horizontal-border.module.css";

const HorizontalBorder = ({
                              className = "",
                              howDoesItriLivingWork,
                              propWidth,
                              propDisplay,
                              answer
                          }) => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const howDoesItriStyle = useMemo(() => {
        return {
            width: propWidth,
            display: propDisplay,
        };
    }, [propWidth, propDisplay]);

    const handleImageClick = () => {
        setIsAnswerVisible(!isAnswerVisible);
    };

    return (
        <div className={[styles.horizontalborder, className].join(" ")}>
            <div className={styles.howDoesItri} style={howDoesItriStyle}>
                {howDoesItriLivingWork}
                <div className={styles.imageContainer} onClick={handleImageClick}>
                    <img className={styles.imgIcon} alt="" src="/img-1.svg"/>
                </div>
            </div>

            {isAnswerVisible && (
                <div className={styles.answer}>
                    {answer}
                </div>
            )}

        </div>
    );
};

HorizontalBorder.propTypes = {
    className: PropTypes.string,
    howDoesItriLivingWork: PropTypes.string,
    propWidth: PropTypes.any,
    propDisplay: PropTypes.any,
    answer: PropTypes.string,
};

export default HorizontalBorder;
