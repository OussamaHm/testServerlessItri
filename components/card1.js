import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./card1.module.css";

const Card1 = ({
  className = "",
  placeholderImage,
  propColor,
  strongCommunityAnd,
  sustainabilityFocus,
}) => {
  const nameStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={[styles.card, className].join(" ")}>
      <img
        className={styles.placeholderImageIcon}
        alt=""
        src={placeholderImage}
      />
      <div className={styles.content}>
        <div className={styles.content}>
          <div className={styles.name} style={nameStyle}>
            <p className={styles.strongCommunityAnd}>{strongCommunityAnd}</p>
            <p className={styles.strongCommunityAnd}>{sustainabilityFocus}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string,
  strongCommunityAnd: PropTypes.string,
  sustainabilityFocus: PropTypes.string,

  /** Style props */
  propColor: PropTypes.any,
};

export default Card1;
