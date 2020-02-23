
export class GalacticAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = [];
    this.venusAge = [];
    this.marsAge = [];
    this.jupiterAge = [];
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
    console.log(this.mercuryAge);
    return (this.mercuryAge);
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
}