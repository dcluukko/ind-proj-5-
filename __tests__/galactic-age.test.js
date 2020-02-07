import { GalacticAge } from '../src/galactic-age.js/index.js';
describe('Galactic Age', () => {

  test('should have inputted Earth years', () => {
    let galacticAge = new GalacticAge(25);
    expect(galacticAge.earthAge).toEqual(25);

  });
});