

describe('Galactic Age', () => {

  test('should have inputted Earth years', () => {
    var galacticage = new Galacticage(1);
    expect(galacticage.side1).toEqual(2);

  });
});