import React from "react";

import background from '../assets/cardbg2.jpg';
import underline from '../assets/gallery/tittle_img.png';
const ThreeSection = () => {
    const sectionStyle = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '65vh', // Adjust the height as needed
    };

    return (
        <div style={sectionStyle} className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-1 text-center font-weight-bold" style={{
                color: '#dc6651',
                fontFamily: '"Great Vibes", cursive , "Dancing Script", cursive , "Caveat", cursive',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Text shadow for readability
            }}>Prash Weds Elsa</h1>
            <img src={underline} alt=""/>
        </div>
    );
};

export default ThreeSection;