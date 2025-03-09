import React from "react";
import "./video.css";
import DateSection from "./DateSection";
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
  const lightPink = "#FFC0CB";

  return (
    <>
      <div
        className="ratio ratio-16x9 position-relative"
        style={{ overflow: "hidden" }}
      >
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
              textShadow: "4px 4px 6px rgba(0, 0, 0, 1)",
              zIndex: 1,
            }}
          >
            {heading}{" "}
          </h1>
          <p
            className="h4"
            style={{
              color: lightPink,
              fontFamily: '"Dancing Script", cursive',
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
              fontFamily: '"Caveat", cursive',
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
