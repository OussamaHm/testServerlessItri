import PropTypes from "prop-types";
import styles from "./newsletter.module.css";

const Newsletter = ({ className = "" }) => {
  return (
    <div className={[styles.newsletter, className].join(" ")}>
      <div className={styles.newsletterContent}>
        <div className={styles.newsletterForm}>
          <div className={styles.keepUpWithContainer}>
            <span>
              <p className={styles.keepUpWith}>
                Keep up with location openings,
              </p>
              <p className={styles.keepUpWith}>
                community events, and other news.
              </p>
            </span>
          </div>
          <div className={styles.form}>
            <div className={styles.inputWithButton}>
              <input
                  type="text"
                  className={styles.input}
                  placeholder="name@email.com"
              />
              <button className={styles.buttonIconWrapper}>
                <img
                    className={styles.buttonIcon}
                    loading="lazy"
                    alt="Submit"
                    src="/button.svg"
                />
              </button>
            </div>
          </div>

        </div>
        <div className={styles.verticalborder}>


        </div>
      </div>
    </div>
  );
};

Newsletter.propTypes = {
  className: PropTypes.string,
};

export default Newsletter;
