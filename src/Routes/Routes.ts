import { Router } from 'express';
import CarController from '../Controllers/CarController';

const route = Router();

route.post('/cars', (req, res, next) => new CarController(req, res, next).create());

route.get('/cars', (req, res, next) => new CarController(req, res, next).getAll());

export default route;
