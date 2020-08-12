export default class StuffModel {
  get(stuffId: string) {
    return {
      id: stuffId,
      items: [
        {
          code: '123456'
        }
      ]
    };
  }
}
