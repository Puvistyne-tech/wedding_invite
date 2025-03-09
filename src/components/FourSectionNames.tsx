import React from "react";
import background from '../assets/gallery/section_bg6.png';
interface FourSectionNamesProps {
    first: string;
    firstPhoto: string;
    second: string;
    secondPhoto: string;
}

const FourSectionNames = ({first, firstPhoto, second, secondPhoto}: FourSectionNamesProps) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center"
        style={{
            backgroundImage: `url(${background})`,
            // backgroundSize: 'cover',
            // backgroundRepeat: 'repeat-y', // Repeat vertically
            // backgroundPosition: 'center',
        }}
        >
            {/* First row for the bride */}
            <div className="d-flex flex-row justify-content-center align-items-center ">
                <div className="col-6 p-3">
                    <h2 className="mr-3 display-4"
                        style={{
                            color: '#dc6e5a',
                            fontFamily: '"GERALDINE", cursive', // Change the font family to GERALDINE
                            fontWeight: 'normal', // Set the font weight to normal
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Text shadow for readability
                        }}
                    >{first}</h2>
                </div>
                <div className="col-6">
                    <img src={firstPhoto} alt="Bride" className="img-fluid"/>
                </div>
            </div>

            {/* Second row for the groom */}
            <div className="d-flex flex-row-reverse justify-content-center align-items-center ">
                <div className="col-6 p-3">
                    <h2 className="ml-3 display-4"
                        style={{
                            color: '#dc6e5a',
                            fontFamily: '"GERALDINE", cursive', // Change the font family to GERALDINE
                            fontWeight: 'normal', // Set the font weight to normal

                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Text shadow for readability
                        }}
                    >{second}</h2>
                </div>
                <div className="col-6">
                    <img src={secondPhoto} alt="Groom" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default FourSectionNames;