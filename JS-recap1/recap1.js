let celsius = prompt("Enter temperature in Celsius:");

let fahrenheit = (celsius * 9 / 5) + 32;
let kelvin = Number(celsius) + 273.15;

    document.getElementById("demo").innerHTML = `
  <p>Celsius: ${celsius} °C</p>
  <p>Fahrenheit: ${fahrenheit} °F</p>
  <p>Kelvin: ${kelvin} K</p>
`;

