class Helpers {
  constructor() {}
  getAverage(list) {
    let total = 0;
    list.split().forEach((el) => {
      total += el;
    });
    return total / list.split(",").size;
  }
  cleanGeoAddress(name) {
    const split = name.split(",");
    var cleanedName = "";
    if (split.size > 2) {
      const cleaned =
        listOf <
        String >
        (split[0], split[split.size - 2], split[split.size - 1]);
      cleanedName = cleaned.toString();
    } else {
      cleanedName = name.toString();
    }
    return cleanedName;
  }

  _test() {
    console.log("testing helpers");
  }
}

const helpers = new Helpers();

module.exports = Object.freeze(helpers);
