window.setInterval(function() {
  var response = document.getElementById("preloader").getHero();
  document.dispatchEvent(new CustomEvent("updateHeroPos", {detail: response}));
}, 1000);
