import React from 'react';
import YouTube from 'react-youtube';
import './video.css';
import DateSection from "./DateSection";
import heroShape from '../assets/gallery/hero_shape2.png';

interface VideoSectionProps {
    videoId: string;
    heading: string;
    description: string;
    footer: string
}

const OneSection: React.FC<VideoSectionProps> = ({videoId, heading, description, footer}) => {
    // const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&mute=1&modestbranding=1&rel=0`;

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            controls: 0,
            loop: 1,
            fullscreenchange: 1,
            playlist: videoId,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            mute: 0,

        },
    };

    // return (
    //     <div className="video-bakground img-fluid">
    //         <YouTube videoId={videoId} opts={opts} className="vieo-iframe"/>
    //         <div className="vido-overlay text-center">
    //             <h1 className="display-1 font-weight-bold">{heading}</h1>
    //             <p className="h">{description}</p>
    //             <footer className="display-6 mt-5">{footer}</footer>
    //         </div>
    //     </div>
    // );

    return (
        <>
            <div className="ratio ratio-16x9 position-relative" style={{overflow: 'hidden'}}>
                <YouTube videoId={videoId} opts={opts} className="position-absolute w-100 h-100"/>

                {/* Dark overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust the alpha value for darkness
                }}></div>

                {/* Text container */}
                <div
                    className="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center">
                    <h1 className="display-1 font-weight-bold" style={{
                        color: 'white',
                        fontFamily: '"Great Vibes", cursive',
                        textShadow: '4px 4px 6px rgba(0, 0, 0, 1)' // Text shadow for readability
                    }}>{heading}
                        {" "}
                        <img
                            src={heroShape}
                            alt={""}
                            className="img-fluid"
                            style={{
                                position: 'relative',
                                top: -40,
                                left: -40,
                                zIndex: 1

                            }}
                        />
                    </h1>
                    <p className="h4" style={{
                        color: 'white',
                        fontFamily: '"Dancing Script", cursive', // Dancing Script font
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}>{description}</p>

                    <footer className="h5 mt-1" style={{
                        color: 'white',
                        fontFamily: '"Caveat", cursive', // Caveat font
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                    }}>
                        {footer}
                        {" "}
                        <DateSection/>
                    </footer>
                </div>
            </div>
        </>
    );


};

export default OneSection;