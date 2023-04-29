import { Router } from 'express';
import CarsConstroller from '../Controllers/CarsConstroller';

const carRoute = Router();

carRoute.post('/', (req, res, next) => new CarsConstroller(req, res, next).create());
carRoute.get('/', (req, res, next) => new CarsConstroller(req, res, next).getAll());
carRoute.get('/:id', (req, res, next) => new CarsConstroller(req, res, next).getById());
carRoute.put('/:id', (req, res, next) => new CarsConstroller(req, res, next).update());

export default carRoute;
