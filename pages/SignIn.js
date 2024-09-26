import React, {Fragment, useEffect} from 'react';
import {Card, Button, Container, Row, Col, Dropdown} from 'react-bootstrap';
import styles from "../components/hero.module.css";
import LanguageSelector from "../components/LanguageSelector";

const SignIn = ({ className = "" }) => {
    useEffect(() => {
        document.body.style.backgroundColor = '#F1FFFF';
        return () => {
            document.body.style.backgroundColor = ''; // Reset to original color when component unmounts
        };
    }, []);

    return (
        <>

        <section className={[styles.hero, className].join(" ")}>

            <header className={styles.heroContainerParent}>
                <div className={styles.heroContainer}>
                    <a href={"/"}> <Fragment></Fragment> <img
                        className={styles.captureDEcran20240625AIcon}
                        alt="Hero"
                        src="/capture-d-ecran-20240625-a-132902removebgpreview-1@2x.png"
                    />
                    </a>
                    <div className={styles.heroContent}>
                        <div className={styles.heroTitle}>
                            <div className={styles.vectorWrapper}>
                                {/* Sélecteur de langue avec Dropdown */}
                                <LanguageSelector/>
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
                                    style={{textDecoration: "none"}}
                                >
                                    <b className={styles.requestACallContainer}>
                                        <span className={styles.aCall}>Request a Call</span>
                                    </b>
                                </a>
                            </div>
                            {/* Dropdown Menu */}

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
                <div/>
            </header>
        </section>

            <Row className="justify-content-center">
                <Col md={8}>
                    <Row className="align-items-center" style={{ backgroundColor: '#F1FFFF', padding: '16px' }}>


                        {/* Sign-in Form */}
                        <Col md={6} className="p-3">
                            <h3>Sign-in to your Itri.living account</h3>
                            <div className="mb-3">
                                <Button variant="primary" className="w-100 mb-2">
                                    <i className="fab fa-facebook-f me-2"></i>
                                    Continue with Facebook
                                </Button>
                                <Button variant="outline-primary" className="w-100">
                                    <img
                                        src="/google.png"
                                        alt="Google"
                                        style={{
                                            width: '20px',
                                            marginRight: '8px',
                                            borderRadius: '3px',
                                            backgroundColor: 'white',
                                        }}
                                    />
                                    Continue with Google
                                </Button>
                            </div>
                        </Col>
                        {/* Image */}
                        <Col md={6} className="p-0">
                            <img
                                src="/atman-studios-UPolqOrkbno-unsplash.jpg"
                                alt="Poolside"
                                className="img-fluid"
                                style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
                            />
                        </Col>
                    </Row>

                </Col>
            </Row>
        </>
    );
};

export default SignIn;
