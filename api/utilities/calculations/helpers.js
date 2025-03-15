class Helpers {
  constructor() {}
  getAverage(list) {
    let total = 0;
    list.split().forEach((el) => {
      total += el;
    });
    return total / list.split(",").length;
  }
}

const helpers = new Helpers();

module.exports = Object.freeze(helpers);
