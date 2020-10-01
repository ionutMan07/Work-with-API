var CAT_API = "https://aws.random.cat/meow";
var DOG_API = "https://random.dog/woof.json";
var FOX_API = "https://randomfox.ca/floof/";
var JOKES_API = "https://api.icndb.com/jokes/random";

function showCat() {
  fetch(CAT_API)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#cat").src = data.file;
    });
}
function showDog() {
  fetch(DOG_API)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#dog").src = data.url;
    });
}

function showFox() {
  fetch(FOX_API)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#fox").src = data.image;
    });
}
function showJokes() {
  fetch(JOKES_API)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.value.joke);
      document.querySelector("#jokes").innerText = data.value.joke;
    });
}
document.querySelector("#show-cat").addEventListener("click", showCat);
document.querySelector("#show-dog").addEventListener("click", showDog);
document.querySelector("#show-fox").addEventListener("click", showFox);
document.querySelector("#show-joke").addEventListener("click", showJokes);
