import { DataSource } from 'typeorm';
import { Product } from './entities/Product';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '3306'),
  username: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || 'rootpassword',
  database: process.env.DATABASE_NAME || 'productdb',
  entities: [Product],
  synchronize: true,
});
