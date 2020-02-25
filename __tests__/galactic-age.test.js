import { GalacticAge } from '../src/galactic-age';
describe('Galactic Age', () => {

  test('should have input', () => {
    let galacticAge = new GalacticAge(25);
    expect(galacticAge.earthAge).toEqual(25);

  });

  test('Input should be only a number character type', () => {
    let galacticAge = new GalacticAge([25]);
    expect(galacticAge.checkNumber()).toEqual([25]);
  })

  // Age Calculator


  test('Calculates all Mercury, Venus, Mars, and Jupiter ages in an array', () => {
    let galacticAge = new GalacticAge([25]);
    expect(galacticAge.allPlanetAgeCalc()).toEqual([104, 40, 13, 2]);
  })

  //Life Expectency Calculator

  test('Calculates life expectency on Mercury, Venus, Mars, and Jupiter', () => {
    let galacticAge = new GalacticAge([25]);
    expect(galacticAge.allPlanetLifeExpCalc()).toEqual([196, 76, 69, 5]);
  })
});
