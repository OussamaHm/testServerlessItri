import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';
import { useLanguage } from "./LanguageContext"; // Assuming you have a language context

const Layout = ({ className = "" }) => {
    const { language } = useLanguage(); // Get the current language
    const [isDisabled, setIsDisabled] = useState(false);
    const [data, setData] = useState({
        title: "",
        subtitle: "",
        buttonText: "",
        buttonDisabledText: ""
    });

    useEffect(() => {
        let selectedData;
        if (language === 'English') {
            selectedData = englishData.layoutData;
        } else if (language === 'Français') {
            selectedData = frenchData.layoutData;
        } else if (language === 'Deutsch') {
            selectedData = germanData.layoutData;
        }
        setData(selectedData);
    }, [language]);

    const handleClick = () => {
        setIsDisabled(true);
    };

    return (
        <div className={`container-fluid ${className}`} style={{ backgroundColor: "#0e7668", padding: "2em" }}>
            <div className="row">
                {/* Images on the left side */}
                <div className="col-md-6 d-flex flex-row justify-content-center align-items-center">
                    <img
                        className="img-fluid rounded mb-4"
                        loading="lazy"
                        alt="Pool 1"
                        src="/rectangle-6@2x.png"
                        style={{ width: "45%", height: "auto", marginRight: "10px" }} // Same width and height for both images
                    />
                    <img
                        className="img-fluid rounded"
                        loading="lazy"
                        alt="Pool 2"
                        src="/rectangle-7@2x.png"
                        style={{ width: "45%", height: "auto" }} // Same width and height for both images
                    />
                </div>

                {/* Text and button on the right side */}
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-start text-white">
                    <h1 className="display-4">{data.title}</h1>
                    <h2 className="h4 my-3">{data.subtitle}</h2>
                    <button
                        className={`btn btn-secondary btn-lg ${isDisabled ? "disabled" : ""}`}
                        onClick={handleClick}
                        disabled={isDisabled}
                    >
                        {isDisabled ? data.buttonDisabledText : data.buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

Layout.propTypes = {
    className: PropTypes.string,
};

export default Layout;
