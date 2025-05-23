'use client';
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 10.762622, // Tọa độ Việt Nam
  lng: 106.660172,
};

const options = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: true,
  scaleControl: true,
  mapTypeControl: true,
  fullscreenControl: true,
};

const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  if (!isLoaded)
    return (
      <div className="flex h-full w-full items-center justify-center">
        Loading...
      </div>
    );

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={options}
    />
  );
};

export default GoogleMaps;
