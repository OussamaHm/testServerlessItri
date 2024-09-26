import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./hero.module.css";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "./LanguageContext";

import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';

const Hero = ({ className = "" }) => {
    const { language } = useLanguage(); // Get the current language from the context
    const [data, setData] = useState({
        a1: "",
        a2: "",
        a3: "",
        a4: "",
        a5: "",
    });

    useEffect(() => {
        console.log("language changed in component hero.js", language);

        // Switch between different JSON data based on the selected language
        let selectedData;
        if (language === 'English') {
            selectedData = englishData.get_data0;
        } else if (language === 'Français') {
            selectedData = frenchData.get_data0;
        } else if (language === 'Deutsch') {
            selectedData = germanData.get_data0;
        }

        // Set the selected data to state
        setData(selectedData);
    }, [language]);

    // Scroll down function
    const handleScrollDown = () => {
        window.scrollTo({
            top: 500,
            behavior: "smooth",
        });
    };

    return (
        <section className={[styles.hero, className].join(" ")}>
            <header className={styles.heroContainerParent}>
                <div className={styles.heroContainer}>
                    <a href={"/"}>
                        <img
                            className={styles.captureDEcran20240625AIcon}
                            alt="Hero"
                            src="/capture-d-ecran-20240625-a-132902removebgpreview-1@2x.png"
                        />
                    </a>
                    <div className={styles.heroContent}>
                        <div className={styles.heroTitle}>
                            <div className={styles.vectorWrapper}>
                                <LanguageSelector />
                            </div>
                            <div className={styles.vectorWrapper}>
                                <img
                                    className={styles.vectorIcon1}
                                    alt="Vector Icon"
                                    src="/vector-1.svg"
                                />
                            </div>
                            <div className={styles.heroButton}>
                                <a
                                    href="https://calendly.com/admin-itri/itri-living-concept-explained"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.buttonContainer}
                                    style={{ textDecoration: "none" }}
                                >
                                    <b className={styles.requestACallContainer}>
                                        <span className={styles.aCall}>Request a Call</span>
                                    </b>
                                </a>
                            </div>

                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="link"
                                    id="dropdown-basic"
                                    className={styles.dropdownToggle}
                                >
                                    <img
                                        className={styles.backgroundborderIcon}
                                        alt="Background Border Icon"
                                        src="/backgroundborder.svg"
                                    />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/SignIn">Sign In</Dropdown.Item>
                                    <Dropdown.Item href="/SignIn">Create an Account</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div />
            </header>
            <div className={styles.uniquely}>
                <div className={styles.experienceUniquelyParent}>
                    <h1 className={styles.experienceUniquely}>
                        <span>
                            <p className={styles.travelUniquely}>
                                <span className={styles.travel}>{data.a1}</span>
                                <i>{data.a2}</i>
                            </p>
                            <p className={styles.travelUniquely}>
                                <span className={styles.travel}>{data.a3}</span>
                                <i>{data.a4}</i>
                            </p>
                        </span>
                    </h1>
                    <div className={styles.frameWrapper}>
                        <div className={styles.discoverItriLivingParent}>
                            <div className={styles.discoverItriLiving}>{data.a5}</div>
                            <img
                                className={styles.icon}
                                alt="Icon"
                                src="/8@2x.png"
                                onClick={handleScrollDown}
                                style={{
                                    cursor: "pointer",
                                    display: "block",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = {
    className: PropTypes.string,
};

export default Hero;
