import * as dotenv from 'dotenv';
dotenv.config();

// environment
export const NODE_ENV = process.env.NODE_ENV || 'development';

// application
export const PORT = process.env.PORT ? +process.env.PORT : 3000;

// Mongo
export const MONGO_URI = process.env.MONGO_URI;
export const MONGO_DB = process.env.MONGO_DB;
