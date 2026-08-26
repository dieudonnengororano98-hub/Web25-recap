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



let score = prompt("Enter your scores");
let grade;

if( score >= 0 && score <= 39){
  grade = 0;
}
else if  (score<= 51){
  grade = 1;
}
else if( score <= 63){
  grade = 2;
  print("receive a grade of 2.");
}
else if (score <= 75){
  grade = 3;
}
else if (score <= 87){
  grade = 4;

}

else if (score <= 100 ){
  grade = 5;
}
else {
  grade = "invalid"
}


document.getElementById("deo").innerHTML = `
your score is ${score} and your grade is ${grade}`;


let number = prompt("Enter a positive number");
let sum;

for (let i = 1; i <= number; i++){
  sum += i;
}

document.getElementById ("bora").innerHTML = `
the sum of natural numbers up to ${number} is ${sum};
`

let limit = prompt("Enter a number");
let result = "";

for(let i = 1; i <= limit; i++) {
  for (let j = 1; j <= limit; j++){
    result += i * j + "";
  }
  result += "<p>";
}

document.getElementById("hero").innerHTML = result;
