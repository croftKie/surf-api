import fetch from "node-fetch";

async function fetchWindData(latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=wind_speed_10m,visibility,wind_direction_10m`;
  const options = {
    method: "GET",
  };
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export default fetchWindData;
