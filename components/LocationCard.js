import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Locations.module.css'; // Using CSS modules for scoped styling

const LocationCard = ({ image, title, titleClass }) => {
    const [customStyle, setCustomStyle] = useState({});

    useEffect(() => {
        const updateStyle = () => {
            if (window.innerWidth <= 450) {
                setCustomStyle(titleClass
                    ? { marginLeft: '25rem'  , fontSize: '1rem'}
                    : { marginRight: '25rem', display: 'flex', fontSize: '1rem' });
            } else {
                setCustomStyle({}); // Reset to no additional styles if the width is greater than 450px
            }
        };

        // Initial check
        updateStyle();

        // Add event listener for window resize
        window.addEventListener('resize', updateStyle);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', updateStyle);
    }, [titleClass]);

    return (
        <div className={`${styles.locationCard} col-6 col-md-4`}>
            <div className={styles.imageWrapper}>
                <img src={image} style={{ backgroundPosition: 'center' }} className={styles.image} alt={title} />
                <div className={`${styles.overlay} d-flex align-items-center justify-content-center`}>
                    <h3 className={`text-white ${titleClass}`} style={customStyle}>{title}</h3>
                </div>
            </div>
        </div>
    );
};

export default LocationCard;
