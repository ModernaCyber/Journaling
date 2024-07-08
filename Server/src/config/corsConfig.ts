import { CorsOptions } from 'cors';

// Define CORS options
export const corsOptions: CorsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the HTTP methods you want to support
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify headers you want to allow
};
