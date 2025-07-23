import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { Client } from './entities/Client';
import { Banker } from './entities/Banker';
import { Transaction } from './entities/Transactions';
import express from 'express';
import { createClientRouter } from './routes/create_client';
import { createBankerRouter } from './routes/create_bank';
import { createTransactionRouter } from './routes/create_transaction';

const app = express();

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Client, Banker, Transaction],
  synchronize: true,
});

const main = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Connection to postgres sucessfully');

    app.use(express.json());
    app.use(createClientRouter, createBankerRouter, createTransactionRouter);
    app.listen(3000, () => {
      console.log('Application running on port 3000');
    });
  } catch (error) {
    console.error('Connection to postgres failed!', error);
  }
};

main();
