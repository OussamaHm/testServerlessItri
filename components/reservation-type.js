import PropTypes from "prop-types";
import styles from "./reservation-type.module.css";

const ReservationType = ({ className = "" }) => {
  return (
    <div className={[styles.reservationType, className].join(" ")}>
      <img className={styles.icon} alt="" src="/icon-2.svg" />
      <b className={styles.label}>Phone call</b>
    </div>
  );
};

ReservationType.propTypes = {
  className: PropTypes.string,
};

export default ReservationType;
