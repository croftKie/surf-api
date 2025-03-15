import fetchGeoData from "../../utilities/fetch/fetchGeoData.js";
import fetchWaveData from "../../utilities/fetch/fetchWaveData.js";
import fetchTempData from "../../utilities/fetch/fetchTempData.js";
import fetchWindData from "../../utilities/fetch/fetchWindData.js";

// GET Controllers

export async function getGeoData(req, res) {
  const data = await fetchGeoData(req.query.location);
  res.send(data);
}
export async function getWaveDataByGeo(req, res) {
  const data = await fetchWaveData(req.query.lat, req.query.lon);
  res.send(data);
}
export async function getWindDataByGeo(req, res) {
  const data = await fetchWindData(req.query.lat, req.query.lon);
  res.send(data);
}
export async function getTempDataByGeo(req, res) {
  const data = await fetchTempData(req.query.lat, req.query.lon);
  res.send(data);
}
export async function getWaveDataByLoc(req, res) {
  const geo = await fetchGeoData(req.query.location);
  const data = await fetchWaveData(geo.lat, geo.lon);
  res.send(data);
}
export async function getWindDataByLoc(req, res) {
  const geo = await fetchGeoData(req.query.location);
  const data = await fetchWindData(geo.lat, geo.lon);
  res.send(data);
}
export async function getTempDataByLoc(req, res) {
  const geo = await fetchGeoData(req.query.location);
  const data = await fetchTempData(geo.lat, geo.lon);
  res.send(data);
}
