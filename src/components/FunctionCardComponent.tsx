import React from "react";
import shape from '../assets/gallery/shape2.png';
import {Fingerprint} from "react-bootstrap-icons";
import {FaHandPointRight, FaMapMarkerAlt} from "react-icons/fa";
import MapLink from "./MapLink";
import photo1 from "../assets/photos/drancyMary.jpeg";
// import background from '../assets/gallery/section_bg1.png';

// import flower2 from '../assets/gallery/from-top.png';

interface FunctionCardComponentProps {
    title: string;
    subtitle?: string;
    other?: string;
    mapLink?: string;
    mapLinkText?: string
}

const FunctionCardComponent: React.FC<FunctionCardComponentProps> = ({
                                                                         title,
                                                                         subtitle,
                                                                         other,
                                                                         mapLink,
                                                                         mapLinkText
                                                                     }) => {
    return (
        <div className="row col-md col-sm m-1"

             style={{
                 backgroundColor: '#fff7f3',
             }}
        >
            <div className="col m-5"
                 style={{}}
            >
                {/*<img*/}
                {/*    src={flower1}*/}
                {/*    alt="..."*/}
                {/*    style={{*/}
                {/*        borderRadius: '1rem',*/}
                {/*        top: 5,*/}
                {/*        left: 250,*/}
                {/*        position: 'fixed',*/}
                {/*        zIndex: 0,*/}
                {/*        height: '40vh',*/}
                {/*        width: '30vh',*/}
                {/*    }}*/}
                {/*/>*/}
                {/*<img*/}
                {/*    src={flower2}*/}
                {/*    alt="..."*/}
                {/*    style={{*/}
                {/*        borderRadius: '1rem',*/}
                {/*        top: 140,*/}
                {/*        left: -100,*/}
                {/*        position: 'relative',*/}
                {/*        zIndex: 0,*/}
                {/*        height: '20vh',*/}
                {/*        width: '20vh',*/}
                {/*    }}*/}
                {/*/>*/}
                <div className="card border-0 shadow-lg p-3"
                     style={{
                         borderRadius: '1rem',
                         zIndex: 1,
                     }}
                >
                    <div
                        className="card-body img-fluid card-img d-flex flex-column align-items-center justify-content-center"
                        style={{
                            backgroundImage: `url(${shape})`,
                            // backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            // backgroundPosition: 'center',
                            height: '60vh', // Adjust the height as needed
                        }}
                    >
                        <div className="card-title text-center display-3 "
                             style={{
                                 color: '#dc6651',
                                 fontFamily: '"Great Vibes", cursive , "Dancing Script", cursive , "Caveat", cursive',
                                 textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Text shadow for readability
                             }}
                        >
                            {title}
                        </div>
                        <div className="card-text text-center display-6"
                             style={{
                                 color: '#dc6651',
                                 fontFamily: '"Great Vibes", cursive , "Dancing Script", cursive , "Caveat", cursive',
                                 textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Text shadow for readability
                             }}
                        >
                            {subtitle}
                        </div>

                        <div className="card-text text-center mt-3"
                             style={{
                                 fontFamily: '"Great Vibes", cursive , "Dancing Script", cursive , "Caveat", cursive',
                                 textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Text shadow for readability
                             }}
                        >
                            <FaHandPointRight
                                color={'#d5152b'}
                            />
                            {" "}


                            <a href={mapLink} target="_blank" rel="noreferrer"
                               style={{
                                   animation: 'blink-animation 1s infinite', // Apply the blink animation
                               }}
                            >{mapLinkText}</a>
                            <FaMapMarkerAlt
                                color={'#d5152b'}
                            />
                            {" "}
                        </div>
                        <div className="card-text text-center h3 mt-5"
                             style={{
                                 color: '#dc6651',
                                 fontFamily: '"Great Vibes", cursive , "Dancing Script", cursive , "Caveat", cursive',
                                 textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Text shadow for readability
                             }}
                        >
                            {other}
                        </div>
                    </div>

                </div>

            </div>
            <div className={"col m-5 align-content-center align-self-center"}>
                <div className="card border-0 shadow-lg p-2"
                     style={{
                         borderRadius: '1rem',
                     }}
                >
                    <img className=" rounded-3 img-fluid" src={photo1} alt={""}/>

                    {/*"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore*/}
                    {/*et dolore magna aliqua. Ut enim ad minim veniam,*/}
                    {/*quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.*/}
                </div>
            </div>


        </div>
    );
};

export default FunctionCardComponent;