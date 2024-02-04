'use client';
import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { icon } from 'leaflet';

const ICON = icon({
  iconUrl: '/marker.png',
  iconSize: [25, 40],
});

const MapComponent = () => {
  return (
    <MapContainer
      center={[-9.6186763, -35.7213639]}
      zoom={16}
      fadeAnimation={true}
      className="h-[300px] lg:h-[500px] screen-width"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-9.6186763, -35.7213639]} icon={ICON}></Marker>
    </MapContainer>
  );
};

export default MapComponent;

