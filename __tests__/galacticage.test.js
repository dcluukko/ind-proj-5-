

describe('Galactic Age', () => {

  test('should have inputted Earth years', () => {
    var galacticAge = new GalacticAge(25);
    expect(galacticAge.earthAge).toEqual(25);

  });
});