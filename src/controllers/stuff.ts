import StuffModel from '@models/stuff';
import { Request, Response } from 'express';

export default {
  async get(request: Request, response: Response) {
    const stuffModel = new StuffModel();
    const stuffId = request.params.stuffId;
    const stuff = stuffModel.get(stuffId);
    return response.json(stuff);
  }
}