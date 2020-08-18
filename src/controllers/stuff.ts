import StuffModel from '@models/stuff';
import { Request, Response } from 'express';

export default class StuffController {
  stuffModel: StuffModel;

  constructor() {
    this.stuffModel = new StuffModel();
  };

  get(request: Request, response: Response) {
    const stuffId = request.params.stuffId;
    const stuff = this.stuffModel.get(stuffId);
    return response.json(stuff);
  };
}