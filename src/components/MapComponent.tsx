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
    position: "relative" as const // Need to specify type for position
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

  // Convert regular Google Maps URL to embed URL
  const getEmbedUrl = (url: string) => {
    // Extract the place coordinates and zoom level from the URL
    const match = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+),(\d+\.?\d*)z/);
    if (match) {
      const [, lat, lng] = match;
      return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.3035355265095!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU2JzE5LjkiTiAywrAyNyc1MC42IkU!5e0!3m2!1sen!2sfr!4v1624981837886!5m2!1sen!2sfr`;
    }
    // If URL doesn't match the pattern, use it as is but replace /maps/ with /maps/embed/
    return url.replace('/maps/', '/maps/embed/');
  };

  const handleMapClick = () => {
    window.open(address, '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="row flex-column justify-content-center align-items-center">
        <div className="col-10">
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
            <div className="text-center mt-2">
              <small className="text-muted">
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