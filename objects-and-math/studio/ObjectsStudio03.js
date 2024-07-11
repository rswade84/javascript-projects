// Code your crewMass function here:
function crewMass(arr) {
  let totalCrewMass = 0;
  for (let i = 0; i < arr.length; i++) {
    totalCrewMass += arr[i].mass;
  }
  return Math.round(totalCrewMass * 10) / 10;
}

// Code your fuelRequired function here:
function fuelRequired(arr) {
  let totalMass = 75000 + crewMass(arr);
  let fuelRequired = totalMass * 9.5;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].species === 'dog' || arr[i].species === 'cat') {
      fuelRequired += 200;
    } else {
      fuelRequired += 100;
    }
  }

  return Math.ceil(fuelRequired);
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
  name: 'Gordon Shumway',
  species: 'alf',
  mass: 90,
  o2Used: function (hrs) {
    return 0.035 * hrs;
  },
  astronautID: 414,
};
let candidateB = {
  name: 'Lassie',
  species: 'dog',
  mass: 19.1,
  o2Used: function (hrs) {
    return 0.03 * hrs;
  },
  astronautID: 503,
};
let candidateC = {
  name: 'Jonsey',
  species: 'cat',
  mass: 3.6,
  o2Used: function (hrs) {
    return 0.022 * hrs;
  },
  astronautID: 796,
};
let candidateD = {
  name: 'Paddington',
  species: 'bear',
  mass: 31.8,
  o2Used: function (hrs) {
    return 0.047 * hrs;
  },
  astronautID: 291,
};
let candidateE = {
  name: 'Pete',
  species: 'tortoise',
  mass: 417,
  o2Used: function (hrs) {
    return 0.01 * hrs;
  },
  astronautID: 599,
};
let candidateF = {
  name: 'Hugs',
  species: 'ball python',
  mass: 2.3,
  o2Used: function (hrs) {
    return 0.018 * hrs;
  },
  astronautID: 890,
};

let crew = [candidateB, candidateD, candidateF];

console.log(
  `The mission has a launch mass of ${
    75000 + crewMass(crew)
  } kg and requires ${fuelRequired(crew)} kg of fuel.`,
);
