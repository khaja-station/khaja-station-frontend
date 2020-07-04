import { config } from 'dotenv';

config();

export default {
  BASE_URL: process.env.REACT_APP_BASE_URL || 'http://localhost:5000/v1',
  GOOGLE_MAP_API_KEY: 'AIzaSyD8MhA0Mzxsz_FsrTeYVRGKin79vQxAxWo',
};
