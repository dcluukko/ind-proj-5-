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

  //Life Expectency Calculator and Statement

  test('Calculates life expectency on Mercury, Venus, Mars, and Jupiter', () => {
    let galacticAge = new GalacticAge([25]);
    expect(galacticAge.allPlanetLifeExpCalc()).toEqual(["On planet Mercury, you have 196 years left to live", "On planet Venus, you have 76 years left to live", "On planet Mars, you have 69 years left to live", "On planet Jupiter, you have 4 years left to live"]);
  })
  test('Calculates life expectency on Mercury, Venus, Mars, and Jupiter', () => {
    let galacticAge = new GalacticAge([80]);
    expect(galacticAge.allPlanetLifeExpCalc()).toEqual(["On planet Mercury, you have lived 33 years longer than expected. Count your blessings, my dude!", "On planet Venus, you have lived 13 years longer than expected. Count your blessings, my dude!", "On planet Mars, you have 39 years left to live", "On planet Jupiter, you have lived 1 years longer than expected. Count your blessings, my dude!"]);
  })
});


