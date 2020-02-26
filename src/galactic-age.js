
export class GalacticAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.planetAgeArray = [];
    this.planetExpectArray = [];
    this.earthExpect = 72;
    this.earthExpectDifference = this.earthExpect - this.earthAge;
    this.planetAge = [];
    this.expectency = [];
  }

  checkNumber() {
    let number = /\d+/;
    let isNum = number.test(this.earthAge);
    if (isNum === true) {
      return this.earthAge
    } else {
      return "error";
    };

  };

  allPlanetAgeCalc() {
    const planetFactor = [.24, .62, 1.88, 11.86];
    for (var i = 0; i < planetFactor.length; i++) {
      this.planetAge = Math.round(this.earthAge / planetFactor[i])
      this.planetAgeArray.push(this.planetAge);
    }
    return this.planetAgeArray;
  };

  allPlanetLifeExpCalc() {
    this.allPlanetAgeCalc();
    const planetNames = ["Mercury", "Venus", "Mars", "Jupiter"];
    const planetFactor = [.24, .62, .88, 11.86];
    for (var i = 0; i < planetNames.length; i++) {
      this.expectency = Math.round((this.earthExpect / planetFactor[i]) - this.planetAgeArray[i]);
      if (this.expectency < 0) {
        this.expectency *= -1;
        this.planetExpectArray.push(`On planet ${planetNames[i]}, you have ${this.expectency} years left to live`);
      }
      else {
        this.expectancy *= 1;
        this.planetExpectArray.push(`On planet ${planetNames[i]}, you have lived ${this.expectency} years longer than expected. Count your blessings, my dude!`);
      }
    }
    return this.planetExpectArray;
  };
}
