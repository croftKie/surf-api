import fetch from "node-fetch";

async function fetchGeoData(location) {
  const url = `https://geocode.maps.co/search?q=${location}&api_key=66ee978bf18e1248071945bjq69c4d5`;
  const options = {
    method: "GET",
  };
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json[0];
  } catch (error) {
    console.log(error);
  }
}

export default fetchGeoData;
