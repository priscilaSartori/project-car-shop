import { Router } from 'express';
import CarsConstroller from '../Controllers/CarsConstroller';

const carRoute = Router();

carRoute.post(
  '/cars',
  (req, res, next) => new CarsConstroller(req, res, next).create(),
);

export default carRoute;
