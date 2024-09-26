import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationCard from './LocationCard';
import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';
import { useLanguage } from "./LanguageContext"; // Assuming you have a language context

const Locations = () => {
    const { language } = useLanguage(); // Get the current language
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        // Load the appropriate language data
        let selectedData;
        if (language === 'English') {
            selectedData = englishData.locations;
        } else if (language === 'Français') {
            selectedData = frenchData.locations;
        } else if (language === 'Deutsch') {
            selectedData = germanData.locations;
        }
        setLocations(selectedData);
    }, [language]);

    const images = [
        { image: '/tooltip@2x.png', titleClass: true },
        { image: '/checkbox@3x.png', titleClass: false },
        { image: '/tooltip-1@2x.png', titleClass: true },
        { image: '/tooltip1@3x.png', titleClass: false },
        { image: '/tooltip2@3x.png', titleClass: true },
        { image: '/tooltip3@3x.png', titleClass: false },
    ];

    return (
        <div className="container">
            <div className="row">
                {images.map((location, index) => (
                    <LocationCard
                        key={index}
                        image={location.image}
                        title={locations[index]?.title}  // Use the title from the selected language
                        titleClass={location.titleClass} // Pass the title class here
                    />
                ))}
            </div>
        </div>
    );
};

export default Locations;
