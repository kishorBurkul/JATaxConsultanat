

import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography } from '@mui/material';

const AnyReactComponent = ({ text }) => (
  <Paper elevation={3} style={{ padding: 10, background: 'white', borderRadius: 5 }}>
    <Typography variant="body1">{text}</Typography>
  </Paper>
);

const GoogleMaps = ({ apiKey }) => {
  // Set default map position and zoom level
  const defaultCenter = { lat: 51.505, lng: -0.09 };
  const defaultZoom = 11;

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
      >
        <AnyReactComponent
          lat={51.505}
          lng={-0.09}
          text="Your Location"
        />
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMaps;
