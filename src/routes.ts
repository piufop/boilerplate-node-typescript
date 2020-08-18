import { Router } from 'express';
import stuffController from '@controllers/stuff';

const routes = Router();

routes.get('/stuff/:stuffId', stuffController.get);

export default routes;