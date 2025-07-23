import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin123',
  database: 'typeorm',
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
