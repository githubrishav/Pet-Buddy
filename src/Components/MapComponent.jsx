// src/MapComponent.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

const MapComponent = () => {
  const [position, setPosition] = useState([51.505, -0.09]);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchNearbyPlaces = async () => {
      try {
        const response = await axios.get('https://nominatim.openstreetmap.org/search', {
          params: {
            q: 'restaurant',
            format: 'json',
            limit: 10,
            lat: position[0],
            lon: position[1],
            radius: 5000
          }
        });
        setPlaces(response.data);
      } catch (error) {
        console.error("Error fetching nearby places:", error);
      }
    };
    fetchNearbyPlaces();
  }, [position]);

  return (
    <div className="h-screen">
      <MapContainer center={position} zoom={13} className="h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {places.map((place, idx) => (
          <Marker
            key={idx}
            position={[place.lat, place.lon]}
          >
            <Popup>
              <div>
                <h2 className="text-lg font-bold">{place.display_name}</h2>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
