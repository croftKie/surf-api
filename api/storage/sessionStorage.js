class SessionStorage {
  #searchHistory = [];
  constructor() {}
  getSearchHistory() {
    console.log(this.#searchHistory);
  }
  setSearchHistory() {}

  _test() {
    console.log("testing session storage");
  }
}

const sessionStorage = new SessionStorage();

module.exports = Object.freeze(sessionStorage);
