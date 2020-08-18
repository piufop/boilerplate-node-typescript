import { Router, Request, Response } from 'express';
import StuffController from '@controllers/stuff';

const stuff = new StuffController();

const routes = Router();

routes.get('/stuff/:stuffId', (request: Request, response: Response) => stuff.get(request, response));

export default routes;