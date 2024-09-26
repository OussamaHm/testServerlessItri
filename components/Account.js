import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faIdCard, faCog } from '@fortawesome/free-solid-svg-icons';

const Account = () => {
    return (
        <Container className="container">
            <h1 className="mb-4">Account</h1>
            <Row>
                <Col md={6} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <FontAwesomeIcon icon={faUser} className="me-3" size="lg" />
                                <Card.Title>Profile</Card.Title>
                            </div>
                            <Card.Text>
                                Keep your personal and contact details up-to-date.
                            </Card.Text>
                            <a href="#" className="btn btn-link p-0">Manage profile</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <FontAwesomeIcon icon={faPhone} className="me-3" size="lg" />
                                <Card.Title>Call Back</Card.Title>
                            </div>
                            <Card.Text>
                                Learn more about Itri membership.
                            </Card.Text>
                            <a href="#" className="btn btn-link p-0">Book a Call Back</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={6} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <FontAwesomeIcon icon={faIdCard} className="me-3" size="lg" />
                                <Card.Title>Membership</Card.Title>
                            </div>
                            <Card.Text>
                                Review and manage your membership details.
                            </Card.Text>
                            <a href="#" className="btn btn-link p-0">Manage membership</a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-4">
                    <Card className="h-100">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <FontAwesomeIcon icon={faCog} className="me-3" size="lg" />
                                <Card.Title>Settings</Card.Title>
                            </div>
                            <Card.Text>
                                Manage your account settings, such as your account password and email preferences.
                            </Card.Text>
                            <a href="#" className="btn btn-link p-0">Manage settings</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Account;
