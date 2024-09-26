import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { useLanguage } from './LanguageContext';

const FlagFR = () => (
    <svg className="flag-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2">
        <path fill="#EC1920" d="M0 0h3v2H0z"/>
        <path fill="#fff" d="M0 0h2v2H0z"/>
        <path fill="#051440" d="M0 0h1v2H0z"/>
    </svg>
);

const FlagDE = () => (
    <svg className="flag-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3">
        <path d="M0 0h5v3H0z"/>
        <path fill="#D00" d="M0 1h5v2H0z"/>
        <path fill="#FFCE00" d="M0 2h5v1H0z"/>
    </svg>
);

export default function LanguageSelector() {
    const { language, changeLanguage } = useLanguage();
    const [selectedCountry, setSelectedCountry] = useState({
        name: language,
        flag: <img className="flag-icon" src="/usaflag.png" alt="USA Flag" />
    });

    const countries = [
        { name: 'English', flag: <img className="flag-icon" src="/usaflag.png" alt="USA Flag" /> },
        { name: 'Français', flag: <FlagFR /> },
        { name: 'Deutsch', flag: <FlagDE /> }
    ];

    const handleSelect = (country) => {
        setSelectedCountry(country);
        changeLanguage(country.name); // Update the global language state
    };

    return (
        <>
            <style>
                {`
                    .flag-icon {
                        width: 24px;
                        height: 24px;
                    }

                    .dropdown-menu {
                        width: 100%;
                        max-width: 300px;
                    }

                    .dropdown-item {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }

                    .dropdown-toggle {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;
                        padding: 0.5rem 1rem;
                        background-color: transparent;
                        border: none;
                    }

                    @media (max-width: 576px) {
                        .dropdown-toggle span {
                            font-size: 0.9rem;
                        }
                    }

                    @media (max-width: 768px) {
                        .dropdown-menu {
                            max-width: 250px;
                        }
                    }
                `}
            </style>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" style={{ background: 'none', border: 'none', boxShadow: 'none' }}>
                    {selectedCountry.flag}
                    <span className="ms-2 text-dark">{selectedCountry.name}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {countries.map((country) => (
                        <Dropdown.Item key={country.name} onClick={() => handleSelect(country)}>
                            <div className="d-flex align-items-center">
                                {country.flag}
                                <span className="ms-2 text-dark">{country.name}</span>
                            </div>
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}
