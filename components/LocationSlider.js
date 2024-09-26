import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const LocationSlider = ({ className = "" }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
                    arrows: false, // Hide arrows on very small screens to save space
                },
            },
        ],
    };

    const imageStyle = {
        width: '100%',
        height: '200px', // Reduced height for mobile friendliness
        objectFit: 'cover',
        borderRadius: '8px',

        backgroundPosition: 'center'
    };

    return (
        <div className={`container ${className}`} style={{ margin: '0 auto', padding: '0 15px' }}>
            <Slider {...settings}>
                <div className="card">
                    <img
                        src="https://happytrip.ma/wp-content/uploads/2021/03/plage-cap-1-tibouda-tnador-trekking-randonnee-au-maroc-happy-trip-scaled.jpg"
                        alt="Nador"
                        style={imageStyle}
                        className="card-img-top"
                    />
                    <div className="card-body text-center">
                        <h5 className="card-title">Nador</h5>
                    </div>
                </div>
                <div className="card">
                    <img
                        src="https://happytrip.ma/wp-content/uploads/2021/03/lagune-de-dakhla-1-trekking-randonnee-au-maroc-happy-trip.jpg"
                        alt="Dakhla"
                        style={imageStyle}
                        className="card-img-top"
                    />
                    <div className="card-body text-center">
                        <h5 className="card-title">Dakhla</h5>
                    </div>
                </div>
                <div className="card">
                    <img
                        src="https://fr.hespress.com/wp-content/uploads/2019/12/merzouga1.jpg"
                        alt="Merzouga"
                        style={imageStyle}
                        className="card-img-top"
                    />
                    <div className="card-body text-center">
                        <h5 className="card-title">Merzouga</h5>
                    </div>
                </div>
                <div className="card">
                    <img
                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/e4/8c/72/caption.jpg?w=1200&h=-1&s=1"
                        alt="Sierra Leone"
                        style={imageStyle}
                        className="card-img-top"
                    />
                    <div className="card-body text-center">
                        <h5 className="card-title">Sierra Leone</h5>
                    </div>
                </div>
            </Slider>
        </div>
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

LocationSlider.propTypes = {
    className: PropTypes.string,
};

export default LocationSlider;
