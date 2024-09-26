import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./community-images.module.css";

const CommunityImages = ({
  className = "",
  image5,
  propFlex,
  propWidth,
  community,
  propWidth1,
}) => {
  const styleSecondarySmallFalseStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  const communityStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={[styles.communityImages, className].join(" ")}>
      <img className={styles.image5Icon} alt="" src={image5} />
      <div className={styles.communityButtons}>
        <div
          className={styles.stylesecondarySmallfalse}
          style={styleSecondarySmallFalseStyle}
        >
          <div className={styles.community} style={communityStyle}>
            {community}
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector-2.svg" />
        </div>
      </div>
    </div>
  );
};

CommunityImages.propTypes = {
  className: PropTypes.string,
  image5: PropTypes.string,
  community: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default CommunityImages;
