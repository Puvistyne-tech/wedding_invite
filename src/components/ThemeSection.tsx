import React from "react";

import photo1 from '../assets/photos/1578103785-IMG-20230714-WA0015.jpg';
import photo2 from '../assets/photos/1213748526-IMG-20230201-WA0001.jpg';
import photo3 from '../assets/photos/20231210_001947.jpg';
import photo4 from '../assets/photos/IMG-20231224-WA0012.jpg';

const GallerySection = () => {
    return (
        <div className="container">
            <div className=" d-flex flex-row align-items-stretch ">
                <div className="col-md-6 p-2">
                    <img className=" rounded-3 img-fluid" src={photo1} alt={""}/>
                </div>
                <div className="col-md-6 p-2">
                    <img className=" rounded-3 img-fluid" src={photo2} alt={""}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 p-2">
                    <img className=" rounded-3 img-fluid" src={photo3} alt={""}/>
                </div>
                <div className="col-md-6 p-2">
                    <img className=" rounded-3 img-fluid" src={photo4} alt={""}/>
                </div>
            </div>
        </div>
    );
};

export default GallerySection;
