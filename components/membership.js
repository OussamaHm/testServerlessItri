import ReservationType from "./reservation-type";
import PropTypes from "prop-types";
import styles from "./membership.module.css";

const Membership = ({ className = "" }) => {
  return (
    <section className={[styles.membership, className].join(" ")}>

    </section>
  );
};

Membership.propTypes = {
  className: PropTypes.string,
};

export default Membership;
