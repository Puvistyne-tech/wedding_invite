import React from "react";

import theme1 from '../assets/photos/theme1.jpeg';
import theme1photo from '../assets/photos/theme1photo.jpeg';
import photo3 from '../assets/photos/20231210_001947.jpg';
import photo4 from '../assets/photos/IMG-20231224-WA0012.jpg';

const GallerySection = () => {
    return (
        <div className="container">
            <div className=" d-flex flex-row align-items-stretch ">
                <div className="col-md-6 p-2">
                    <img className=" rounded-3 img-fluid" src={theme1} alt={""}/>
                </div>
                <div className="col-md-6 p-2">
                    <img className=" rounded-3 img-fluid" src={theme1photo} alt={""}/>
                </div>
            </div>
            {/*<div className="row">*/}
            {/*    <div className="col-md-6 p-2">*/}
            {/*        <img className=" rounded-3 img-fluid" src={photo3} alt={""}/>*/}
            {/*    </div>*/}
            {/*    <div className="col-md-6 p-2">*/}
            {/*        <img className=" rounded-3 img-fluid" src={photo4} alt={""}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default GallerySection;
