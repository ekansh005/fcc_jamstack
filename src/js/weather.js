function success(position) {
  const coordinates = position.coords;
  const url = `/.netlify/functions/weatherapi?lat=${coordinates.latitude}&lon=${coordinates.longitude}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //dom manipulation to update weather information
      document.querySelector("#area").textContent(`data.name`);
      document.querySelector("#temp").textContent(`data.main.temp`);
      document.querySelector("#condition").textContent(`data.weather[0].main`);
      document.querySelector("#desc").textContent(`data.weather[0].description`);
      document.querySelector("#weather").classList.remove("hidden");
    });
}

function error(err) {
  console.error(`Weather API Error: ${err}`);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
}
