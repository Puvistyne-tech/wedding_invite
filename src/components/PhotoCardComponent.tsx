import React from "react";
import {FaHandPointRight, FaMapMarkerAlt} from "react-icons/fa";


interface PhotoCardComponentProps {
    // title: string;
    // subtitle?: string;
    // other?: string;
    mapLink?: string;
    mapLinkText?: string
    // tail?: string;
    // cocktailText?: string;
    photoSource?: string;
    // backgroundColor?: string;
}

const PhotoCardComponent: React.FC<PhotoCardComponentProps> = ({
                                                                         // title,
                                                                         // subtitle,
                                                                         // other,
                                                                         mapLink,
                                                                         mapLinkText,
                                                                         // tail,
                                                                         // cocktailText,
                                                                         photoSource,
                                                                         // backgroundColor = '#ffffff',
                                                                     }) => {
    // return (
    //     <div className="row col-md col-sm m1 p3"
    //
    //          style={{
    //              // backgroundColor: backgroundColor,
    //              height: '100%',
    //
    //          }}
    //     >
    //         <div className="col m-3"
    //              style={{}}
    //         >
    //             <div className="card border-0 shadow-lg p-"
    //                  style={{
    //                      borderRadius: '2rem',
    //                      // zIndex: 1,
    //                  }}
    //             >
    //                 <div
    //                     className="col-6 card-body img-fluid card-img d-flex flex-column align-items-center justify-content-center"
    //                     style={{
    //                         backgroundImage: `url(${shape})`,
    //                         backgroundRepeat: 'no-repeat',
    //                         backgroundSize: 'cover',
    //                         backgroundPosition: 'center',
    //                         height: '80vh', // Adjust the height as needed
    //                     }}
    //                 >
    //                     <div className="card-title text-center display-3"
    //                          style={{
    //                              color: '#dc6651',
    //                              fontFamily: '"Great Vibes", cursive , "Dancing Script", cursive , "Caveat", cursive',
    //                              // fontWeight: 'bold',
    //                              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Text shadow for readability
    //                          }}
    //                     >
    //                         {title}
    //                     </div>
    //                     <div className="card-text text-center display-6"
    //                          style={{
    //                              color: '#dc6651',
    //                              fontFamily: '"Great Vibes", cursive , "Dancing Script", cursive , "Caveat", cursive',
    //                              // fontWeight: 'bold',
    //                              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Text shadow for readability
    //                          }}
    //                     >
    //                         {subtitle}
    //                     </div>
    //
    //                     <div className="card-text text-center mt-3"
    //                          style={{
    //                              fontFamily: '"Great Vibes", cursive , "Dancing Script", cursive , "Caveat", cursive',
    //                              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Text shadow for readability
    //                              // fontWeight: 'bold',
    //                          }}
    //                     >
    //                         <FaHandPointRight
    //                             color={'#d5152b'}
    //                         />
    //                         {" "}
    //
    //
    //                         <a href={mapLink} target="_blank" rel="noreferrer"
    //                            style={{
    //                                animation: 'blink-animation 1s infinite', // Apply the blink animation
    //                            }}
    //                         >{mapLinkText}</a>
    //                         <FaMapMarkerAlt
    //                             color={'#d5152b'}
    //                         />
    //                         {" "}
    //                     </div>
    //                     <div className="card-text text-center h2 mt-5 m-4"
    //                          style={{
    //                              color: '#dc6651',
    //                              fontFamily: '"Great Vibes", cursive , "Dancing Script", cursive , "Caveat", cursive',
    //                              // fontWeight: 'bold',
    //                              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Text shadow for readability
    //                          }}
    //                     >
    //                         {other}
    //                     </div>
    //                     {tail &&
    //                         <div className="card-text text-center h1 mt-5"
    //                              style={{
    //                                  color: '#794b44',
    //                                  fontFamily: '"Great Vibes", cursive , "Dancing Script", cursive , "Caveat", cursive',
    //                                  // textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Text shadow for readability
    //                              }}
    //                         >
    //                             {tail}
    //                         </div>
    //                     }
    //                     {cocktailText &&
    //                         <div className="card-text text-center display-5 mt-5"
    //                              style={{
    //                                  color: '#794b44',
    //                                  fontFamily: '"Great Vibes", cursive , "Dancing Script", cursive , "Caveat", cursive',
    //                                  // textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Text shadow for readability
    //                              }}
    //                         >
    //                             {cocktailText}
    //                             {" "}
    //                             <FaCocktail
    //                                 color={'#32a6ef'}
    //                                 className={"mb-2"}
    //                             />
    //
    //                         </div>
    //                     }
    //                 </div>
    //
    //             </div>
    //
    //         </div>
    //         <div className={"col-12 m- align-content-center align-self-center"}>
    //             <div className="card border-0 shadow-lg p-2"
    //                  style={{
    //                      borderRadius: '1rem',
    //                  }}
    //             >
    //                 <img className=" rounded-3 img-fluid" src={photoSource} alt={""}/>
    //
    //             </div>
    //         </div>
    //
    //     </div>
    // );

    return (
        <>
            <div className="col-12 p-2 position-relative">
                {/* Wrapper div for the background image */}
                <div className="shadowlg"
                    style={{
                        backgroundImage: `url(${photoSource})`,
                        backgroundSize: 'contain', // Scale image to fit container while preserving aspect ratio
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center', // Center the image
                        minHeight: '80vh',
                        borderRadius: '1rem',
                    }}
                >
                    {mapLink &&
                        <div className="card-text text-center mt-3"
                             style={{
                                 fontFamily: '"Great Vibes", cursive , "Dancing Script", cursive , "Caveat", cursive',
                                 textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Text shadow for readability
                                 // fontWeight: 'bold',
                                 position: 'relative',
                                 top: '9vh',
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
                    }
                </div>
            </div>

        </>
    )
        ;
};

export default PhotoCardComponent;