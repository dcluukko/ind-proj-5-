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
    expect(galacticAge.jupiterCalc()).toEqual("13");
  })
  // test('subtracts Mercury Age from preset life expectancy', () => {
  //   let galacticAge = new galacticAge([25])

  //subtract earthAge from lifeExpect before converting to Mercury Age 


});
