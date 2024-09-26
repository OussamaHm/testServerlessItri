import PropTypes from "prop-types";
import styles from "./wrapper.module.css";
import React, { useEffect, useState } from "react";

const Wrapper = ({ className = "" }) => {
  const [data, setData] = useState({
    c1: "",
    c2: "",
    c3: "",
    c4: "",
    c5: "",
    c6: "",
    c7: "",
    c8: "",
    c9: "",
    c10: "",
    c11: ""
  });

  useEffect(() => {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL; // Fetch the base URL from env variables
    fetch(`${baseURL}/get_data4`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
      <div className={[styles.wrapper, className].join(" ")}>
        <div className={styles.membership}>
          <h1 className={styles.heading2Container}>
          <span className={styles.heading2Container1}>
            <span className={styles.exceptionnel}>{data.c1}</span>
            <i className={styles.value}>{data.c2}</i>
            <span className={styles.exceptionnel}>{data.c3}</span>
          </span>
          </h1>
          <div className={styles.benefits}>
            <div className={styles.highlight}>
              <img
                  className={styles.leonardoPhoenixAHighlyDetaIcon}
                  alt=""
                  src="/leonardo-phoenix-a-highly-detailed-gold-token-with-a-prominent-1-1@2x.png"
              />
              <div className={styles.atItrilivingWeContainer}>
                <p className={styles.atItrilivingWe}>
                  {data.c4}
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.blankLine}>
                  {data.c5}
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.blankLine}>
                  {data.c6}
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.blankLine}>
                  {data.c7}
                </p>
              </div>
            </div>
            <div className={styles.customization}>
              <div className={styles.forAllTheseContainer}>
                <p className={styles.blankLine}>
                  {data.c8}
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.blankLine}>
                  {data.c9}
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.blankLine}>
                  {data.c10}
                </p>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.blankLine}>
                  {data.c11}
                </p>
              </div>
              <img
                  className={styles.leonardoPhoenixAHighlyDetaIcon1}
                  alt=""
                  src="/leonardo-phoenix-a-highly-detailed-gold-token-with-a-prominent-1-2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
  );
};

Wrapper.propTypes = {
  className: PropTypes.string,
};

export default Wrapper;
