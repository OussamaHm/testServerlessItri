import React, { useCallback, useRef, useState } from "react";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
    MDBContainer,
} from "mdb-react-ui-kit";
import  './GlobalCarousel.css'

const GlobalCarousel = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselInner = useRef(null);

    const slideChanged = useCallback(() => {
        const activeItem = carouselInner.current.querySelector(".active");
        setCurrentSlide(
            Array.from(carouselInner.current.children).indexOf(activeItem)
        );
    }, []);

    const changeSlide = useCallback((position) => {
        Array.from(carouselInner.current.children).forEach((el, i) => {
            if (i !== position) {
                el.classList.remove("active");
            } else {
                el.classList.add("active");
                slideChanged();
            }
        });
    }, [slideChanged]);

    return (
        <MDBContainer className="mt-5">
            <MDBCarousel
                id="carouselExampleIndicators"
                showControls
                fade
                onSlide={slideChanged}
            >
                <MDBCarouselInner ref={carouselInner}>
                    {slides.map((slide, index) => (
                        <MDBCarouselItem key={index} className={index === 0 ? "active" : ""}>
                            <MDBCarouselElement src={slide.image} alt={slide.title} />
                            <MDBCarouselCaption>
                                <h5>{slide.title}</h5>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                    ))}
                </MDBCarouselInner>

                <div className="carousel-indicators" style={{ marginBottom: "-20px" }}>
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            className={`carousel-indicator ${currentSlide === index ? "active" : ""}`}
                            onClick={() => changeSlide(index)}
                            style={{ width: "100px" }}
                        >
                            <img
                                className="d-block w-100 img-fluid"
                                src={slide.image}
                                alt={slide.title}
                            />
                        </button>
                    ))}
                </div>
            </MDBCarousel>
        </MDBContainer>
    );
};

export default GlobalCarousel;
