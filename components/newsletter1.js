import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLanguage } from "./LanguageContext"; // Use your existing language context
import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';

const Newsletter1 = ({ className = "" }) => {
  const { language } = useLanguage(); // Get the current language from the context
  let data = {};

  // Select the appropriate language data
  if (language === 'English') {
    data = englishData.dataNewsletter;
  } else if (language === 'Français') {
    data = frenchData.dataNewsletter;
  } else if (language === 'Deutsch') {
    data = germanData.dataNewsletter;
  }

  return (
      <section className={`d-flex justify-content-center align-items-center ${className}`} id={"SignUp"}>
        <div className="card p-4 p-md-5" style={{ backgroundColor: '#4b3621', color: '#d1e7dd', maxWidth: '500px', width: '100%' }}>
          <div className="text-center mb-4">
            <h1 className="display-6">
              {data.title}
              <i className="d-block fw-bold">{data.subtitle}</i>
            </h1>
            <p className="mt-3">
              {data.description}
            </p>
          </div>
          <div className="mb-4">
            <div className="input-group">
              <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder={data.placeholder}
              />
              <button
                  className="btn btn-lg"
                  style={{ backgroundColor: '#b08d5b', color: '#fff' }}
              >
                {data.buttonText}
              </button>
            </div>
          </div>
          <p className="text-center small">
            {data.terms}
          </p>
          <div className="d-flex justify-content-center gap-2 mt-4">
            <button className="btn btn-outline-light d-flex align-items-center" style={{ fontSize: '0.875rem' }}>
              <img
                  src="/icon.svg"
                  alt="Google Icon"
                  className="me-2"
                  style={{ height: '20px' }}
              />
              {data.googleSignIn}
            </button>
            <button className="btn btn-outline-light d-flex align-items-center" style={{ fontSize: '0.875rem' }}>
              <img
                  src="/facebook--original.svg"
                  alt="Facebook Icon"
                  className="me-2"
                  style={{ height: '20px' }}
              />
              {data.facebookSignIn}
            </button>
          </div>
        </div>
      </section>
  );
};

Newsletter1.propTypes = {
  className: PropTypes.string,
};

export default Newsletter1;
