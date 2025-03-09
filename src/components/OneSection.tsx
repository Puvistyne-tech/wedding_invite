import React from "react";
import "./video.css";
import DateSection from "./DateSection";
import shape2 from "../assets/photos/shape2.jpg";
import cardbg2 from "../assets/cardbg2.jpg";
import cardbg3 from "../assets/photos/cardbg3.jpg";


interface VideoSectionProps {
  videoId: string;
  heading: string;
  description: string;
  footer: string;
}

const OneSection: React.FC<VideoSectionProps> = ({
  videoId,
  heading,
  description,
  footer,
}) => {
  // const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&mute=1&modestbranding=1&rel=0`;

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
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

  const lightPink = "#FFC0CB";

  return (
    <>
      <div
        className="ratio ratio-16x9 position-relative"
        style={{ overflow: "hidden" }}
      >
        {/* <YouTube
          videoId={videoId}
          opts={opts}
          className="position-absolute w-100 h-100"
        /> */}

        {/*<div className={"position-absolute w-100 h-100"}>*/}
        {/*    <video autoPlay loop controls={true} className="position-absolute w-100 h-100">*/}
        {/*        <source src={headerVideo} type="video/mp4"/>*/}
        {/*        Your browser does not support the video tag.*/}
        {/*    </video>*/}

        {/*<ReactPlayer*/}
        {/*    url={videoFile}*/}
        {/*    controls={true}*/}
        {/*    playing={false}// à changer*/}
        {/*    loop={true}*/}
        {/*    volume={0.5} // adjust the volume as needed (0.0 to 1.0)*/}
        {/*    // width='100%'*/}

        {/*    // height='50px' // adjust the height as needed*/}
        {/*/>*/}
        {/*</div>*/}
        {/*<video autoPlay loop className="position-absolute w-100 h-100">*/}
        {/*    <source src={headerVideo} type="video/mp4"/>*/}
        {/*    Your browser does not support the video tag.*/}
        {/*</video>*/}
        {/* Dark overlay */}
        {/*<div style={{*/}
        {/*    position: 'absolute',*/}
        {/*    top: 0,*/}
        {/*    left: 0,*/}
        {/*    height: '100%',*/}
        {/*    width: '100%',*/}
        {/*    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust the alpha value for darkness*/}
        {/*}}></div>*/}
        <img
              src={cardbg3}
              alt={"background"}
              className="img-fluid"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0
              }}
            />

        {/* Text container */}
        <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center">
          <h1
            className="display-1 font-weight-bold"
            style={{
              color: lightPink,
              fontFamily: '"Great Vibes", cursive',
              textShadow: "4px 4px 6px rgba(0, 0, 0, 1)", // Text shadow for readability
              zIndex: 1,
            }}
          >
            {heading}{" "}
          </h1>
          <p
            className="h4"
            style={{
              color: lightPink,
              fontFamily: '"Dancing Script", cursive', // Dancing Script font
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              zIndex: 1,
            }}
          >
            {description}
          </p>

          <footer
            className="h5 mt-1"
            style={{
              color: lightPink,
              fontFamily: '"Caveat", cursive', // Caveat font
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              zIndex: 1,
            }}
          >
            {footer} <DateSection />
          </footer>
        </div>
      </div>
    </>
  );
};

export default OneSection;
