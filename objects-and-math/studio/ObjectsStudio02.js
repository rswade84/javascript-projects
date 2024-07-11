// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  return Math.round(2 * Math.PI * radius);
}

// Code your missionDuration function here:
function missionDuration(orbits, radius = 2000, speed = 28000) {
  let time = (orbits * orbitCircumference(radius)) / speed;
  return Math.round(time * 100) / 100;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, radius, speed) {
  let hours = missionDuration(3, radius, speed);
  let oxygen = Math.round(candidate.o2Used(hours) * 1000) / 1000;
  return `${candidate.name} will perfom the spacewalk, which will last ${hours} hours and require ${oxygen} kg of oxygen.`;
}

// Candidate data & crew array.
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

let crew = [candidateA, candidateC, candidateE];
let spaceWalker = selectRandomEntry(crew);

spaceWalker = crew[0];
for (let i = 1; i < crew.length; i++) {
  if (crew[i].o2Used < spaceWalker.o2Used) {
    spaceWalker = crew[i];
  }
}

console.log(
  `The mission will travel ${
    5 * orbitCircumference(2000)
  } km around planet, and will take ${missionDuration(5)} hours to complete`,
);

console.log(oxygenExpended(spaceWalker));
