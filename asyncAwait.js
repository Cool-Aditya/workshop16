const fetch = require("node-fetch");

async function covidData() {
  try {
    const res = await fetch("https://api.covid19api.com/summary");

    if (res.status >= 400) {
      console.log("Bad request from server");
    }

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  console.log("using async-await");
}
covidData();
