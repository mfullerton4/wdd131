const calculateWindChill = (temp, windSpeed) => 35.75 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
const temp = 50;
const windSpeed = 5;
const windChill = calculateWindChill(temp, windSpeed)
console.log(`${windChill.toFixed(1)}°F`)

document.getElementById("windchill").textContent = windChill;