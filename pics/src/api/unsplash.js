// related to congiuration of axios-unsplash
import axios from 'axios';

// setup preconfigured instance of client
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 0abbdaeb2c5bc410e02972f24a218b2e284317a85ca5f629426a1c5d3cf9a6db'
  }
});