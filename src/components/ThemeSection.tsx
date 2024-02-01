import React from "react";

import theme1 from '../assets/photos/theme1.jpeg';
import theme1photo from '../assets/photos/theme1photo.jpeg';
const GallerySection = () => {
    return (
        <div className="container">
            <div className=" d-flex flex-row align-items-center ">
                {/*<div>*/}
                {/*    <div className={"display-4"}>Theme 1 description</div>*/}
                {/*</div>*/}
                <div className="col-md-6 p-2 flex-grow align-content-stretch ">
                    <img className=" rounded-3 img-fluid " src={theme1} alt={""}
                         style={{
                             height: '300px',
                         }}
                    />
                </div>
                <div className="col-md-6 p-2">
                    <img className=" rounded-3 img-fluid" src={theme1photo} alt={""}
                         style={{}}
                    />
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
