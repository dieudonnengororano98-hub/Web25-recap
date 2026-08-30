const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

console.log(fruits);
console.log(fruits.length);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

const vegetables = [];

for (let i = 1; i <= 3; i++) {
  const veg = prompt(`Enter vegetable ${i} of 3:`);
  vegetables.push(veg);
}

console.log(vegetables);
console.log(vegetables.length);

const numbers = [];

for (let i = 1; i <= 5; i++) {
  const num = Number(prompt(`Enter number ${i} of 5:`));
  numbers.push(num);
}

console.log("Numbers array:", numbers);







const searchNum = Number(prompt("Enter a number to check if it exists in the array:"));

if (numbers.includes(searchNum)) {
  console.log(`Number ${searchNum} was found in the array.`);
} else {
  console.log(`Number ${searchNum} was not found in the array.`);
}

numbers.pop();

console.log("Updated numbers array after pop():", numbers);

numbers.sort((a, b) => a - b);

console.log("Sorted numbers array (ascending):", numbers);



const number = [];

while (true) {
  const input = prompt("Enter a number (or press Cancel / enter empty text to stop):");
  
  if (input === null || input.trim() === "") {
    break;
  }
  
  const num = Number(input);
  if (!isNaN(num)) {
    numbers.push(num);
  }
}

document.write("<h2>Even Numbers:</h2>");

for (const num of numbers) {
  if (num % 2 === 0) {
    document.write(`<p>${num}</p>`);
  }
}

document.write("<p>End of program.</p>");









function sortArray(numbers) {
  return numbers.slice().sort((a, b) => a - b);
}

const originalArray = [42, 7, 19, 3, 88, 12];
const sortedArray = sortArray(originalArray);

console.log("Original array:", originalArray);
console.log("Sorted array:", sortedArray);




function sortArray(numbers, order) {
  const sorted = numbers.slice();
  
  if (order === "asc") {
    return sorted.sort((a, b) => a - b);
  } else if (order === "desc") {
    return sorted.sort((a, b) => b - a);
  }
  
  return sorted;
}

const inputNumbers = [42, 7, 19, 3, 88, 12];

const ascSorted = sortArray(inputNumbers, "asc");
const descSorted = sortArray(inputNumbers, "desc");

console.log("Original array:", inputNumbers);
console.log("Ascending order:", ascSorted);
console.log("Descending order:", descSorted);

const secondTestArray = [100, -5, 20, 0, 15];
console.log("Second array (descending):", sortArray(secondTestArray, "desc"));













const movies = [];

const countInput = prompt("How many movies would you like to rate?");
const movieCount = Number(countInput);

if (!isNaN(movieCount) && movieCount > 0) {
  for (let i = 1; i <= movieCount; i++) {
    const title = prompt(`Enter title for movie ${i} of ${movieCount}:`);
    
    let rating = Number(prompt(`Enter rating for "${title}" (1 to 5):`));
    while (isNaN(rating) || rating < 1 || rating > 5) {
      rating = Number(prompt(`Invalid input. Enter a rating between 1 and 5 for "${title}":`));
    }

    const movie = {
      title: title,
      rating: rating
    };

    movies.push(movie);
  }

  movies.sort((a, b) => b.rating - a.rating);

  const highestRated = movies[0];

  document.write("<h2>Highest-Rated Movie:</h2>");
  document.write(`<p><strong>${highestRated.title}</strong> - Rating: ${highestRated.rating}/5</p>`);

  document.write("<h2>All Movies (Sorted Highest to Lowest):</h2>");
  document.write("<ul>");
  for (const item of movies) {
    document.write(`<li><strong>${item.title}</strong> - Rating: ${item.rating}/5</li>`);
  }
  document.write("</ul>");
} else {
  document.write("<p>No valid number of movies was entered.</p>");
}