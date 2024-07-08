import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv';
import models from "../models";
// import { User } from "../models/User";

dotenv.config();

const connection = new Sequelize({
  dialect: process.env.DB_DIALECT as 'postgres', // Specifies the database dialect
  host: process.env.DB_HOST, // Specifies the database host
  username: process.env.DB_USERNAME, // Specifies the database username
  password: process.env.DB_PASSWORD, // Specifies the database password
  database: process.env.DB_DATABASE, // Specifies the database name
  logging: true, // Disables logging of SQL queries
//   models: [__dirname + '../models'], // Associates the models with this Sequelize instance
  models: [...models], // Associates the models with this Sequelize instance
});



export default connection;
