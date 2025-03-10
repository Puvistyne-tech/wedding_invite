import React from 'react';

interface MapComponentProps {
  address: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ address }) => {
  const mapStyles = {
    width: "100%",
    height: "400px",
    border: "none",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    position: "relative" as const
  };

  const overlayStyles = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    zIndex: 2
  };

  const titleStyle = {
    color: '#dc6651',
    fontFamily: '"Great Vibes", cursive',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    marginBottom: '0.5rem'
  };

  const descriptionStyle = {
    color: '#794b44',
    fontFamily: '"Dancing Script", cursive',
    fontSize: '1.2rem',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
    marginBottom: '1.5rem'
  };

  const getEmbedUrl = (url: string) => {
    // Use exact coordinates for LANA EVENTS
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=LANA+EVENTS&center=49.0189324,2.4689862&zoom=17`;
  };

  const handleMapClick = () => {
    window.open(address, '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="row flex-column justify-content-center align-items-center">
        <div className="col-10">
          <div className="text-center mb-4">
            {/* <h2 style={titleStyle}>Join Us At Lana Events</h2> */}
            <p style={descriptionStyle}>
              Celebrate our special day at this magnificent venue, where elegance meets celebration.
              {/* <br /> */}
              {/* 18 Rue des Artisans, 95190 Goussainville */}
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <div 
              onClick={handleMapClick} 
              style={overlayStyles} 
              role="button" 
              aria-label="Open in Google Maps"
            />
            <iframe
              title="Google Maps"
              src={getEmbedUrl(address)}
              style={mapStyles}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="text-center mt-3">
              <small className="text-muted" style={{ fontFamily: '"Caveat", cursive' }}>
                Click anywhere on the map to open in Google Maps for navigation
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent; 