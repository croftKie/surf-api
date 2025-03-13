// GET Controllers

export function getData(req, res) {
  res.send("Hello, world!");
}

function getUserSearchHistory(req, res) {}

function getUserSearchResults(req, res) {}

function getUserBoards(req, res) {}

function getUserFavourites(req, res) {}

// POST Controllers

function postAuth(req, res) {}

function postUserSignup(req, res) {}

function postUserLogin(req, res) {}

function postUserBoard(req, res) {}

function postUserFavourite(req, res) {}

// DELETE Controllers

function deleteUser(req, res) {}

function deleteUserBoard(req, res) {}

function deleteUserFavourite(req, res) {}
