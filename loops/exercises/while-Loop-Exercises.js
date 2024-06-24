//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

const input = require('readline-sync');

let fuelLevel = 0;
let onBoard = 0;
let altitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) {
  fuelLevel = input.question(
    'Enter the starting fuel level (between 5000 and 30000):',
  );
  if (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) {
    console.log(
      `Invalid input of ${fuelLevel}. Must be between 5,000 & 30,000. Please try again!`,
    );
  }
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

while (onBoard <= 0 || onBoard > 7 || isNaN(onBoard)) {
  onBoard = input.question('How many Astronauts onboard?');
  if (onBoard <= 0 || onBoard > 7 || isNaN(onBoard)) {
    console.log(`Incorrect, must be between 1-7. Try again!`);
  }
}

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (fuelLevel - 100 * onBoard >= 0) {
  altitude += 50;
  fuelLevel -= 100 * onBoard;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

let output = `The shuttle gained an altitude of ${altitude} km.`;

if (altitude >= 2000) {
  output += ' Orbit achieved!';
} else {
  output += ' Failed to reach orbit.';
}

console.log(output);
