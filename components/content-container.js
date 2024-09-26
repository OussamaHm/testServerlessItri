import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';
import { useLanguage } from "./LanguageContext"; // Assuming you have a language context

const ContentContainer = ({ className = "" }) => {
  const { language } = useLanguage(); // Get the current language
  const [content, setContent] = useState([]);

  useEffect(() => {
    let selectedData;
    if (language === 'English') {
      selectedData = englishData.get_data9;
    } else if (language === 'Français') {
      selectedData = frenchData.get_data9;
    } else if (language === 'Deutsch') {
      selectedData = germanData.get_data9;
    }
    setContent(selectedData);
  }, [language]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
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
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const imageStyle = {
    width: '100%',
    height: '300px', // Set a fixed height for all images
    objectFit: 'cover', // Ensures the image covers the space nicely without distortion
    borderRadius: '8px', // Adds rounded corners to images
  };

  const cardBodyStyle = {};

  const explanationStyle = {
    color: 'var(--color-teal-200)',
    fontSize: '14px',
    marginTop: '2em',
  };

  return (
      <div className={`container ${className}`} style={{ margin: '0 auto' }}>
        <Slider {...settings}>
          {content.map((item, index) => (
              <div className="card" key={index}>
                <img
                    src={item.imagePath}
                    alt={item.altText}
                    style={imageStyle}
                    className="card-img-top"
                />
                <div className="card-body" style={cardBodyStyle}>
                  <h5 className="card-title">{item.title}</h5>
                </div>
              </div>
          ))}
        </Slider>
        <div style={explanationStyle}>(¹) : For beachfront resort only</div>
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

ContentContainer.propTypes = {
  className: PropTypes.string,
};

export default ContentContainer;
