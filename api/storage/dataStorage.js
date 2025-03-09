class DataStorage {
  #waveData = [];
  constructor() {}
  getWaveData() {
    console.log(this.#waveData);
  }
  setWaveData() {}

  _test() {
    console.log("testing data storage");
  }
}

const dataStorage = new DataStorage();

module.exports = Object.freeze(dataStorage);
