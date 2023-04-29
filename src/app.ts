import express from 'express';
import CarsRouter from './Routes/CarsRouter';

const app = express();
app.use(express.json());
app.use('/cars', CarsRouter);

export default app;
