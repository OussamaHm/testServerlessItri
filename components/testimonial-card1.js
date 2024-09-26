import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./testimonial-card1.module.css";

const TestimonialCard1 = ({
  className = "",
  image11,
  propWidth,
  propHeight,
  professionally,
  cleaned,
}) => {
  const testimonalNameStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className={[styles.testimonialCard, className].join(" ")}>
      <div className={styles.bgCard} />
      <img className={styles.image11Icon} alt="" src={image11} />
      <b className={styles.testimonalName} style={testimonalNameStyle}>
        <p className={styles.professionally}>{professionally}</p>
        <p className={styles.professionally}>{cleaned}</p>
      </b>
    </div>
  );
};

TestimonialCard1.propTypes = {
  className: PropTypes.string,
  image11: PropTypes.string,
  professionally: PropTypes.string,
  cleaned: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
};

export default TestimonialCard1;
