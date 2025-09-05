// js/ads.js

// URL of the ad script to auto-play
const adScriptUrl = "//pl27400430.revenuecpmgate.com/be/2e/06/be2e06ec9e2276671d155fc84fcfca02.js";

// Function to play ad
function playAd() {
  const script = document.createElement('script');
  script.src = adScriptUrl;
  document.body.appendChild(script);
}

// Play once after page load
window.addEventListener('load', () => {
  playAd();
});

// Play again 2 minutes after any click
let clickTimeout;
document.addEventListener('click', () => {
  if (clickTimeout) clearTimeout(clickTimeout);
  clickTimeout = setTimeout(playAd, 2 * 60 * 1000); // 2 minutes
});
