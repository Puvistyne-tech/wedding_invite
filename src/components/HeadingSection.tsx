import React from "react";
import background from '../assets/gallery/section_bg2.jpg';

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
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                //height: '15vh', // Adjust the height as needed
            }}
        >
            <h1
                className={"display-2 text-center font-weight-bold pt-2 mt-2"}
                style={{
                    color: '#f58484',
                    fontFamily: '"Great Vibes", cursive , "Dancing Script", cursive , "Caveat", cursive',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Text shadow for readability
                }}
            >{title}</h1>

            {subtitle && <h2

            className={"display-5 text-center mb-3"}
            style={{
                color: '#74bdf8',
                fontFamily: ' "Dancing Script", cursive , "Caveat", cursive',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' // Text shadow for readability
            }}
            >{subtitle}</h2>}
        </div>
    );
};

export default HeadingSection;