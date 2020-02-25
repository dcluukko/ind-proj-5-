
export class GalacticAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.planetAgeArray = [];
    this.earthExpect = 72 - earthAge;
    this.planetAge = [];
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
      this.planetAge = (this.earthAge / planetFactor[i]).toFixed(0);
      this.planetAgeArray.push(this.planetAge);
    }
    console.log(this.planetAgeArray[0]);
    return this.planetAgeArray;
  };

  mercCalc() {
    this.mercAge = (this.earthAge / .24).toFixed(0);
    return this.mercAge
  }

  venusCalc() {
    this.venusAge = (this.earthAge / .62).toFixed(0);
    console.log(this.venusAge);
    return (this.venusAge);
  }

  marsCalc() {
    this.marsAge = (this.earthAge / 1.88).toFixed(0);
    console.log(this.marsAge);
    return (this.marsAge);
  }

  jupiterCalc() {
    this.jupiterAge = (this.earthAge / 11.86).toFixed(0);
    console.log(this.jupiterAge);
    return (this.jupiterAge);
  }

  mercExpect() {
    let mercExpect = (this.earthExpect / .24).toFixed(0);
    return (mercExpect);
  }
  venusExpect() {
    let venusExpect = (this.earthExpect / .62).toFixed(0);
    return (venusExpect);
  }
  marsExpect() {
    let marsExpect = (this.earthExpect / 1.88).toFixed(0);
    return (marsExpect);
  }
  jupiterExpect() {
    let jupiterExpect = (this.earthExpect / 11.86).toFixed(0);
    return (jupiterExpect);
  }
};