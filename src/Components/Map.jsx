import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css'; // Assuming you have a separate CSS file for styling

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      } catch (error) {
        setError(error.message || 'An error occurred while fetching location.');
      } finally {
        setLoading(false);
      }
    };

    if (navigator.geolocation) {
      fetchLocation();
    } else {
      setError('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, []); // Empty dependency array, effect runs once after initial render

  return (
    <div className="map-container">
      {loading && <div className="map-loading">Loading...</div>}
      {error && <div className="map-error">Error: {error}</div>}
      {!loading && !error && (
        <MapContainer
          center={userLocation}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={userLocation}>
            <Popup>You are here</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
