
export class GalacticAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = [];
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
  mercCalc() {
    this.mercuryAge = (this.earthAge / .24).toFixed(0)
    return (this.mercuryAge);
  }

};

