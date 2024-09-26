import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLanguage } from "./LanguageContext"; // Assuming you have a language context

import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';

const FrameComponent3 = ({ className = "" }) => {
  const { language } = useLanguage(); // Get the current language
  const [data, setData] = useState({});

  useEffect(() => {
    // Load the appropriate language data
    let selectedData;
    if (language === 'English') {
      selectedData = englishData.dataBlog;
    } else if (language === 'Français') {
      selectedData = frenchData.dataBlog;
    } else if (language === 'Deutsch') {
      selectedData = germanData.dataBlog;
    }
    setData(selectedData);
  }, [language]);

  return (
      <section className={`container ${className}`}>
        <div className="text-center my-4">
          <h1 className="display-5 fw-bold ">{data.sectionTitle}</h1>
        </div>
        <div className="row">
          {data.newsItems?.map((item, index) => (
              <div key={index} className="col-md-6 mb-3"> {/* Adjusted column size to 6 for two cards per row */}
                <div className="card h-100" style={{ minHeight: "350px" }}>
                  <img
                      className="card-img-top"
                      alt=""
                      src={`/gradient${index + 1}@2x.png`}
                      style={{ maxHeight: "150px", objectFit: "cover" }}
                  />
                  <div className="card-body p-3 d-flex flex-column">
                    <h6 className="text-muted mb-2">{item.date}</h6>
                    <h5 className="mb-2">{item.title}</h5>
                    <p className="flex-grow-1 mb-2">{item.description}</p>
                    <a href="#" className="btn mt-2" style={{ backgroundColor : "var(--color-tan)"}}>
                      {data.readMoreText}
                    </a>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
