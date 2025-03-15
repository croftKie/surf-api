import fetch from "node-fetch";

async function fetchTempData(latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=apparent_temperature,rain,cloud_cover`;
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

export default fetchTempData;
