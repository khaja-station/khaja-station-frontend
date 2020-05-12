import { config } from 'dotenv';

config();

export default {
  BASE_URL: process.env.REACT_APP_BASE_URL || 'http://localhost:5000',
};
