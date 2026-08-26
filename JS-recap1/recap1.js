let celsius = prompt("Enter temperature in Celsius:");

let fahrenheit = (Number(celsius) * 9 / 5) + 32;
let kelvin = Number(celsius) + 273.15;

  document.getElementById("demo").innerHTML = `
  <p>Celsius: ${celsius} °C</p>
  <p>Fahrenheit: ${fahrenheit} °F</p>
  <p>Kelvin: ${kelvin} K</p>
`;



let x1 = prompt("Enter x1:");
let y1 = prompt("Enter y1:");
let x2 = prompt("Enter x2:");
let y2 = prompt("Enter y2:");

let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

document.getElementById("donne").innerHTML = `
  <p>Point 1: (${x1}, ${y1})</p>
  <p>Point 2: (${x2}, ${y2})</p>
  <p>Distance: ${distance.toFixed(2)}</p>
`;



let grade = prompt("Enter scores");
