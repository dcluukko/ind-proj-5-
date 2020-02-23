
export class GalacticAge {
  constructor(earthAge, earthExpect) {
    this.earthAge = earthAge;
    this.mercAge = [];
    this.venusAge = [];
    this.marsAge = [];
    this.jupiterAge = [];
    this.earthExpect = earthExpect;
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
    this.mercAge = (this.earthAge / .24).toFixed(0);
    this.mercAge
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
    let mercAge = this.mercAge;
    console.log(mercAge);
    let mercExpect = (this.earthExpect * mercAge)
    console.log(mercExpect);
    return (mercExpect);
  }
}