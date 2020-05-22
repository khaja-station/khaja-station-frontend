import React from 'react';
import env from 'app/app.env';
import { AddressProps } from 'profile/profile.types';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import CircularSpinner from 'common/components/spinner/circular-spinner';

const Address: React.FC<AddressProps> = ({ google }) => {
  return (
    <div>
      <Map
        google={google}
        initialCenter={{
          lat: 40.854885,
          lng: -88.081807,
        }}
      />
    </div>
  );
};

export default GoogleApiWrapper({ apiKey: env.GOOGLE_MAP_API_KEY, LoadingContainer: CircularSpinner })(Address);
