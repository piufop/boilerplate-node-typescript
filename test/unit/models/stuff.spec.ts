import Stuff from '@models/stuff';

describe('Stuff model - Sample unit tests', () => {

  beforeAll(done => {
    done();
  });

  afterAll(done => {
    done();
  });

  beforeEach(done => {
    done();
  });

  afterEach(done => {
    done();
  });

  it('Should return a sample stuff', done => {
    const stuff = new Stuff();
    const id = '654321';
    const result = stuff.get(id);
    expect(result).toBeDefined();
    expect(result.id).toEqual(id);
    expect(result.items).toHaveLength(1);
    expect(result.items[0].code).toBeDefined();
    done();
  });
});