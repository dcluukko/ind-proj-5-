
export class GalacticAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }
};

GalacticAge.prototype.checkNumber = function () {
  const values = Object.values(this);
  for (let i = 0; i < values.length; i++) {
    let number = /\d+/;
    let numberArray = values[i].match(number);
    if (numberArray) {
      return "success";
    } else {
      return "error";
    }
  };
};
