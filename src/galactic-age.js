
export class GalacticAge {
  constructor(earthAge, earthExpect) {
    this.earthAge = earthAge;
    this.mercAge = [];
    this.venusAge = [];
    this.marsAge = [];
    this.jupiterAge = [];
    this.earthExpect = 72 - earthAge;
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
}