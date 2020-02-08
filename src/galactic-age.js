
export class GalacticAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercurAge = mercuryAge;
    this.allPlanetAges = [];

    this.lifeExpect = 78 - earthAge;
  }

  checkNumber() {
    let number = /\d+/;
    let isNum = number.test(this.earthAge);
    if (isNum === true) {
      console.log(this.earthAge)
      return this.earthAge
    } else {
      return "error";
    };

  };
  mercCalc() {
    this.mercuryAge = (this.earthAge / .24).toFixed(0);
    console.log(mercLifeExpect);
    return (mercLifeExpect);
  }

  galacticAgeCalc() {
    //planet conversion number order : Mercury, Venus, Mars, Jupiter:
    //                                  .24       .62  1.88    11.86
    const planetConNum = [.24, .62, 1.88, 11.86]
    for (let i = 0; i < this.earthAge.length; i++) {

    }
  }

};

