import { GoogleAPI } from 'google-maps-react';

export interface AddressProps {
  google: GoogleAPI;
  loaded?: boolean;
}
