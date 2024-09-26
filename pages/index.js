import Hero from "../components/hero";
import Concept from "../components/concept";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import Exceptional from "../components/exceptional";

// import ContentContainer from "../components/content-container";
import Members from "../components/members";
import Wrapper from "../components/wrapper";
import Layout from "../components/layout";
import Stays from "../components/stays";
import Consultation from "../components/consultation";
import Spaces from "../components/spaces";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent5 from "../components/frame-component5";
import Newsletter1 from "../components/newsletter1";
import Membership from "../components/membership";
import FooterLinksContainer from "../components/footer-links-container";
import Newsletter from "../components/newsletter";
import styles from "./index.module.css";
import React, { useState, useEffect, useRef } from "react";
import Exceptional2 from "../components/Exceptional2";
import FrameComponents from "../components/content-container";
import Header from "../components/Header";

const LandingPageItriLiving = ( ) => {
  const [isNewsletterVisible, setIsNewsletterVisible] = useState(false);
  const [isMembersVisible, setIsMembersVisible] = useState(false);
  const [isLayoutVisible, setIsLayoutVisible] = useState(false);
  const [isStayVisible, setIsStayVisible] = useState(false);
  const [isConsultationVisible, setIsConsultationVisible] = useState(false);
  const [isSpaceVisible, setIsSpaceVisible] = useState(false);
  const [isFrame2Visible, setIsFrame2Visible] = useState(false);
  const [isFrame3Visible, setIsFrame3Visible] = useState(false);
  const [isFrame4Visible, setIsFrame4Visible] = useState(false);
  const [isFrame5Visible, setIsFrame5Visible] = useState(false);
  const [isNewVisible, setIsNewVisible] = useState(false);
  const NewRef = useRef(null);
  const Frame5Ref = useRef(null);
  const Frame4Ref = useRef(null);
  const Frame3Ref = useRef(null);
  const Frame2Ref = useRef(null);
  const SpaceRef = useRef(null);
  const ConsultationRef = useRef(null);
  const newsletterRef = useRef(null);
  const membersRef = useRef(null);
  const LayoutRef = useRef(null);
  const StayRef = useRef(null);

  useEffect(() => {
    const NewObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsNewVisible(true);
          NewObserver.disconnect(); // Stop observing after the animation is triggered
        }
      },
      { threshold: 0.05 } // Trigger when 5% of the element is visible
    );
    const Frame5Observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsFrame5Visible(true);
          Frame5Observer.disconnect(); // Stop observing after the animation is triggered
        }
      },
      { threshold: 0.05 } // Trigger when 5% of the element is visible
    );

    const Frame3Observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsFrame3Visible(true);
          Frame3Observer.disconnect(); // Stop observing after the animation is triggered
        }
      },
      { threshold: 0.05 } // Trigger when 5% of the element is visible
    );
    const Frame2Observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsFrame2Visible(true);
          Frame2Observer.disconnect(); // Stop observing after the animation is triggered
        }
      },
      { threshold: 0.05 } // Trigger when 5% of the element is visible
    );

    const newsletterObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsNewsletterVisible(true);
          newsletterObserver.disconnect(); // Stop observing after the animation is triggered
        }
      },
      { threshold: 0.05 } // Trigger when 5% of the element is visible
    );

    const membersObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsMembersVisible(true);
          membersObserver.disconnect(); // Stop observing after the animation is triggered
        }
      },
      { threshold: 0.05 } // Trigger when 5% of the element is visible
    );

    const LayoutObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsLayoutVisible(true);
          LayoutObserver.disconnect(); // Stop observing after the animation is triggered
        }
      },
      { threshold: 0.05 } // Trigger when 5% of the element is visible
    );


      const StayObserver = new IntersectionObserver(
          (entries) => {
              const entry = entries[0];
              if (entry.isIntersecting) {
                  setIsStayVisible(true);
                  StayObserver.disconnect(); // Stop observing after the animation is triggered
              }
          },
          { threshold: 0.05 } // Trigger when 5% of the element is visible
      );

    const ConsultationObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsConsultationVisible(true);
          ConsultationObserver.disconnect(); // Stop observing after the animation is triggered
        }
      },
      { threshold: 0.05 } // Trigger when 5% of the element is visible
    );

    const SpaceObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsSpaceVisible(true);
          SpaceObserver.disconnect(); // Stop observing after the animation is triggered
        }
      },
      { threshold: 0.05 } // Trigger when 5% of the element is visible
    );

    if (StayRef.current) {
      StayObserver.observe(StayRef.current);
    }

    if (SpaceRef.current) {
      SpaceObserver.observe(SpaceRef.current);
    }

    if (Frame2Ref.current) {
      Frame2Observer.observe(Frame2Ref.current);
    }

    if (Frame3Ref.current) {
      Frame3Observer.observe(Frame3Ref.current);
    }


    if (Frame5Ref.current) {
      Frame5Observer.observe(Frame5Ref.current);
    }
    if (NewRef.current) {
      NewObserver.observe(NewRef.current);
    }
    if (LayoutRef.current) {
      LayoutObserver.observe(LayoutRef.current);
    }

    if (ConsultationRef.current) {
      ConsultationObserver.observe(ConsultationRef.current);
    }

    if (newsletterRef.current) {
      newsletterObserver.observe(newsletterRef.current);
    }

    if (membersRef.current) {
      membersObserver.observe(membersRef.current);
    }
      const Frame4Observer = new IntersectionObserver(
          (entries) => {
              const entry = entries[0];
              if (entry.isIntersecting) {
                  setIsFrame4Visible(true);
                  Frame4Observer.disconnect(); // Stop observing after the animation is triggered
              }
          },
          { threshold: 0.05 } // Trigger when 5% of the element is visible
      );

      if (Frame4Ref.current) {
          Frame4Observer.observe(Frame4Ref.current);
      }
    return () => {
      newsletterObserver.disconnect();
      membersObserver.disconnect();
      ConsultationObserver.disconnect();
      SpaceObserver.disconnect();
      Frame2Observer.disconnect();
      Frame3Observer.disconnect();
      Frame4Observer.disconnect();
      Frame5Observer.disconnect();
      NewObserver.disconnect();
      StayObserver.disconnect();
      LayoutObserver.disconnect();
    };
  }, []);
  return (

      <div className={styles.landingPageItriLiving}>
          <Hero/> {/* navbar    */}
          <section className={styles.amalfi}>

              <img
                  className={styles.amalfi201204112801Icon}
                  loading="lazy"
                  alt=""
                  src="/amalfi2012041-1280-1@2x.png"
              />


          </section>


          <Concept/> {/* Itri Living Concept vvvvvvvvvvvv */}

          <FrameComponent/> { /* gold picture ...  vvvvvvvvvvvv*/}

          <Exceptional2/> { /*  Everything   vvvvv */}

          <FrameComponent1/> {/*  first  album    vvvv*/}


          <Exceptional/> {/* Benefits  vvvvvv */}

          <FrameComponents/> {/* second album vvvvvvvvvvvvvvvvv */}

          <Members/> {/* What makes our resorts  vvvvvvvvvvv */}
          <section className={styles.content}>
              <div className={styles.container}>
                  <div
                      ref={newsletterRef}
                      className={`${
                          isNewsletterVisible ? styles.slideInFromRight : styles.hidden
                      }`}
                  >
                      <Wrapper/> {/* Exceptionnel  value  vvvvvvvvvvvv*/}
                  </div>

                  <div
                      ref={LayoutRef}
                      className={`${
                          isLayoutVisible ? styles.slideInFromBottom : styles.hidden
                      }`}
                  >
                      <Layout/> {/*  Save up 80%   vvvvvvvvvvvvv*/}
                  </div>

              </div>
          </section>

          <div
              ref={StayRef}
              className={`${
                  isStayVisible ? styles.slideInFromRight : styles.hidden
              }`}
          >
              <Stays/> {/*  Stay with

Itri Living vvvvvvvvvvvv  */}
          </div>
          <Consultation/> {/* cards vvvvvvvvvvvvv */}

          <div id="spaces">
              <Spaces/> {/*  villes  vvvvvvvvvvvvvvvv*/}

          </div>


          <FrameComponent2/> {/* Remender  vvvvvvvvvvvvvvvvv*/}


          <FrameComponent3/>


          <FrameComponent4/> {/* Itri.nft Partnership with vvvvvvvvvvvvvv */}


          <FrameComponent5/> {/*  faqs vvvvvvvvvvvvvvvvvv */}


          <Newsletter1/> {/* signup    vvvvv*/}

          <footer className={styles.card}>
              <div className={styles.spacesImage}>
                  <img
                      className={styles.captureDEcran20240628AIcon}
                      loading="lazy"
                      alt=""
                      src="/capture-d-ecran-20240628-a-193249removebgpreview-1@2x.png"
                  />
              </div>
              <div className={styles.spacesDescription}>
                  <div className={styles.discoverDynamicSpaces}>
                      {" "}
                      Discover dynamic spaces, engaging events, and an interactive online
                      Member Hub.
                  </div>
              </div>
              <FooterLinksContainer/>
              <Newsletter/>
              <div className={styles.horizontalborder}>
                  <div className={styles.itriLivingAll}>
                      © 2024 Itri Living. All rights reserved.
                  </div>
              </div>
          </footer>
      </div>
  );
};

export default LandingPageItriLiving;
