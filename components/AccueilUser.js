import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import styles from "./hero.module.css";

const AccueilUser = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className={styles.navbarBrand}>
                    <img
                        className={styles.captureDEcran20240625AIcon}
                        alt="Hero"
                        src="/capture-d-ecran-20240625-a-132902removebgpreview-1@2x.png"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarToggler} />
                <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarCollapse}>
                    <Nav className={`ms-auto align-items-center d-flex ${styles.navbarNav}`}>

                        <Dropdown align="end" className="mx-2">
                            <Dropdown.Toggle variant="light" id="language-dropdown" size="sm" className="d-flex align-items-center">
                                <img
                                    src="/globe.png"
                                    alt="Languages"
                                    height="20px"
                                    width="20px"
                                    className={`d-inline-block align-top ${styles.globeIcon}`}
                                />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#en" className="small">
                                    English
                                </Dropdown.Item>
                                <Dropdown.Item href="#fr" className="small">
                                    Français
                                </Dropdown.Item>
                                <Dropdown.Item href="#de" className="small">
                                    Deutsch
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown align="end">
                            <Dropdown.Toggle variant="light" id="dropdown-basic" size="sm">
                                <span className="navbar-toggler-icon"></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#action/1" className="small">
                                    Profile
                                </Dropdown.Item>
                                <Dropdown.Item href="#action/2" className="small">
                                    Settings
                                </Dropdown.Item>
                                <Dropdown.Item href="#action/3" className="small">
                                    Logout
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AccueilUser;
