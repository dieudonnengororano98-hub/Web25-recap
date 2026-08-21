const cabinClass = prompt("Enter the cabin class (A/B/C).");
switch (cabinClass) {
    case 'A':
        console.log('Top deck cabin with window.');
        break;
    case 'B':
        console.log('Top deck cabin without window.');
        break;
    case 'C':
        console.log('Windowless cabin under the car deck.');
        break;
    default:
        console.log("Invalid cabin class.");
}











