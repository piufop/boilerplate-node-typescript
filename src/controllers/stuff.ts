import StuffModel from '@models/stuff';

export default class StuffController {
  stuffModel: StuffModel;

  constructor() {
    this.stuffModel = new StuffModel();
  };

  get(request: any, response: { send: any }) {
    const stuffId = request.params.stuffId;
    const stuff = this.stuffModel.get(stuffId);
    return response.send(stuff);
  };
}