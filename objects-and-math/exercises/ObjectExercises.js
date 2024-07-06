let superChimpOne = {
  name: 'Chad',
  species: 'Chimpanzee',
  mass: 9,
  age: 6,
  astronautID: 1,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

let salamander = {
  name: 'Lacey',
  species: 'Axolotl Salamander',
  mass: 0.1,
  age: 5,
  astronautID: 2,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

let animalOne = {
  name: 'Brad',
  species: 'Chimpanzee',
  mass: 11,
  age: 6,
  astronautID: 3,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

let animalTwo = {
  name: 'Leroy',
  species: 'Beagle',
  mass: 14,
  age: 5,
  astronautID: 4,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

let animalThree = {
  name: 'Almina',
  species: 'Tardigrade',
  mass: 0.0000000001,
  age: 1,
  astronautID: 5,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

let animalCrew = [superChimpOne, salamander, animalOne, animalTwo, animalThree];

function crewReports(animalCrew) {
  for (let i = 0; i < animalCrew.length; i++) {
    let animal = animalCrew[i];
    console.log(
      `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`,
    );
  }
}

crewReports(animalCrew);

/* Before these animal astronauts can get ready for launch, they need to take a physical fitness test. Define a fitnessTest function that takes an array as a parameter.

Within the function, race the five animals together by using the move method. An animal is done with the race when they reach 20 steps or greater. Store the result as a string: '____ took ____ turns to take 20 steps.' Fill in the blanks with the animal’s name and race result. Create a new array to store how many turns it takes each animal to complete the race.

Return the array from the function, then print the results to the console (one animal per line).*/

// Define the fitnessTest function
function fitnessTest(arr) {
  let results = []; // Stores the result of each race

  // For each animal in the array
  for (let i = 0; i < arr.length; i++) {
    let totalSteps = 0; // The total number of steps the animal has taken
    let turns = 0; // The number of turns the animal has taken

    // While they haven't reached 20 steps
    while (totalSteps < 20) {
      totalSteps += arr[i].move(); // Add the animal's move to the total steps
      turns++; // Increment the number of turns
    }
    // Add the result to the results array
    results.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
  }

  // Return the results
  return results;
}
// Test the function
let testResults = fitnessTest(animalCrew);
testResults.forEach((result) => console.log(result));
