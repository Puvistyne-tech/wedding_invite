import React from "react";
import background from '../assets/gallery/section_bg2.png';

interface HeadingSectionProps {
    title: string;
    subtitle?: string;
}

const HeadingSection: React.FC<HeadingSectionProps> = ({ title, subtitle }) => {
    return (
        <div className=" m-4 img-fluid border-2 shadow-lg d-flex flex-column justify-content-center align-items-center"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                //height: '15vh', // Adjust the height as needed
            }}
        >
            <h1
                className={"display-2 text-center font-weight-bold pt-2 mt-2"}
                style={{
                    color: '#fdfdfd',
                    fontFamily: '"Great Vibes", cursive , "Dancing Script", cursive , "Caveat", cursive',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Text shadow for readability
                }}
            >{title}</h1>

            {subtitle && <h2

            className={"display-6 text-center "}
            style={{
                color: '#ffe1c1',
                fontFamily: ' "Dancing Script", cursive , "Caveat", cursive',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Text shadow for readability
            }}
            >{subtitle}</h2>}
        </div>
    );
};

export default HeadingSection;