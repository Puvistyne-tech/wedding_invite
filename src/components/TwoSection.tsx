import React from "react";

import firstSlide from '../assets/photos/bandw.jpg';
// import secondSlide from '../assets/photos/IMG-20231224-WA0014.jpg';
// import thirdSlide from '../assets/photos/IMG-20231224-WA0022.jpg';
import {Carousel} from "react-bootstrap";

const TwoSection = () => {
    return (
        <Carousel indicators={false} fade={true} controls={false} draggable={true} >
            <Carousel.Item
                // interval={1000}
            >
                <img
                    className="d-block w-100 object-fit-cover"
                    src={firstSlide}
                    alt="First slide"
                />
            </Carousel.Item>
            {/*<Carousel.Item interval={1000}>*/}
            {/*    <img*/}
            {/*        className="d-block w-100 object-fit-cover"*/}
            {/*        src={secondSlide}*/}
            {/*        alt="Second slide"*/}
            {/*    />*/}
            {/*</Carousel.Item>*/}
            {/*<Carousel.Item interval={1000}>*/}
            {/*    <img*/}
            {/*        className="d-block w-100 object-fit-cover"*/}
            {/*        src={thirdSlide}*/}
            {/*        alt="Third slide"*/}
            {/*    />*/}
            {/*</Carousel.Item>*/}
        </Carousel>
    );
};

export default TwoSection;
