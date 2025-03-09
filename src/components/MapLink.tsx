import React from "react";
import {FaHandPointRight, FaMapMarkerAlt} from "react-icons/fa";

interface MapLinkProps {
    mapLink: string;
    mapLinkText: string;
}

const MapLink: React.FC<MapLinkProps> = ({mapLink, mapLinkText}) => {
    return (
        <>
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
        </>
    );
};

export default MapLink;