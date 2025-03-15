import fetch from "node-fetch";

async function fetchWaveData(latitude, longitude) {
  const url = `https://marine-api.open-meteo.com/v1/marine?latitude=${latitude}&longitude=${longitude}&hourly=wave_height,wave_direction,wave_period`;
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

export default fetchWaveData;
