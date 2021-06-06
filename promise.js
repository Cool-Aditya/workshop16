const fetch = require("node-fetch");

function myFunction() {
  fetch("https://api.covid19api.com/summary")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log("Api not found");
    });
}

myFunction();
