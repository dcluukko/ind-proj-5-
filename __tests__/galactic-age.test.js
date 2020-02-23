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
  test('Converts Earth years to Venus years', () => {
    let galacticAge = new GalacticAge([25]);
    expect(galacticAge.venusCalc()).toEqual("40");
  })
  test('Converts Earth years to Venus years', () => {
    let galacticAge = new GalacticAge([25]);
    expect(galacticAge.marsCalc()).toEqual("13");
  })
  test('Converts Earth years to Venus years', () => {
    let galacticAge = new GalacticAge([25]);
    expect(galacticAge.jupiterCalc()).toEqual("2");
  })

  //Life Expectancy Calc

  test('Calculates life expectancy on Mercury', () => {
    let galacticAge = new GalacticAge([25]);
    expect(galacticAge.mercExpect()).toEqual(9)
  })
});
