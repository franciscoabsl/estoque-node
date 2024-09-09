import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from './database';
import productRoutes from './routes/productRoutes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Connect to the database
AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');

    // Set up routes
    app.use('/api/products', productRoutes);
    app.get('/api/health', (req, res) => {
      res.status(200).send('Backend is healthy');
    });

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => console.log(error));
