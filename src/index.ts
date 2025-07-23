import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const main = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Connection to postgres sucessfully');
  } catch (error) {
    console.error('Connection to postgres failed!', error);
  }
};

main();
