import axios from 'axios';
import https from 'https';

const request = axios.create({
  baseURL: 'https://api.onehower.com/',
  httpsAgent: new https.Agent({ keepAlive: true, rejectUnauthorized: false }),
});

export default request;
