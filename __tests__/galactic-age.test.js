import { GalacticAge } from '../src/galactic-age';
describe('Galactic Age', () => {
  test('2+2=4', () => {
    const sum = 2 + 2;
    expect(sum).toEqual(4);
  })

  test('should have inputted Earth years', () => {
    let galacticAge = new GalacticAge(25);
    expect(galacticAge.earthAge).toEqual(25);

  });
});