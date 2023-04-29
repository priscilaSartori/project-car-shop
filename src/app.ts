import express from 'express';
import CarsRouter from './Routes/CarsRouter';
import MotorcyclesRoute from './Routes/MotorcyclesRoute';

const app = express();
app.use(express.json());
app.use('/cars', CarsRouter);
app.use('/motorcycles', MotorcyclesRoute);

export default app;
