import { GalacticAge } from '../src/galactic-age';
describe('Galactic Age', () => {

  test('should have input', () => {
    let galacticAge = new GalacticAge(25);
    expect(galacticAge.earthAge).toEqual(25);

  });

  test('Input should be only a number character type', () => {
    let galacticAge = new GalacticAge([3]);
    expect(galacticAge.checkNumber()).toEqual([3]);
  })

  test('Converts Earth years to Mercury years', () => {
    let galacticAge = new GalacticAge([25]);
    expect(galacticAge.mercCalc()).toEqual("104");
  })
});
