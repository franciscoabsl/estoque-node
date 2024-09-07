import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from './database';
import productRoutes from './routes/productRoutes';

const app = express();
app.use(express.json());

// Connect to the database
AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');

    // Set up routes
    app.use('/products', productRoutes);

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => console.log(error));
