import fetch from "node-fetch";

async function fetchGeoData(location) {
  const url = `https://geocode.maps.co/search?q=${location}&api_key=${process.env.GEO_KEY}`;
  const options = {
    method: "GET",
  };
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    if (json.length > 0) {
      return json[0];
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
}

export default fetchGeoData;
