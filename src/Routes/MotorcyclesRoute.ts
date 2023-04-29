import { Router } from 'express';
import MotorcyclesConstroller from '../Controllers/MotorcyclesController';

const MotorcyclesRoute = Router();

MotorcyclesRoute.post('/', (req, res, next) => new MotorcyclesConstroller(req, res, next).create());

export default MotorcyclesRoute;
