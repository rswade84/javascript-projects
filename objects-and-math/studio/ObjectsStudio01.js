// Code your selectRandomEntry function here:
function selectRandomEntry(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Code your buildCrewArray function here:
function buildCrewArray(ids, candidates) {
  let crew = [];
  for (let i = 0; i < candidates.length; i++) {
    if (ids.includes(candidates[i].astronautID)) {
      crew.push(candidates[i]);
    }
  }
  return crew;
}

let idNumbers = [291, 414, 503, 599, 796, 890];
let idsChosen = [];

while (idsChosen.length < 3) {
  let randomEntry = selectRandomEntry(idNumbers);
  if (!idsChosen.includes(randomEntry)) {
    idsChosen.push(randomEntry);
  }
}

// Here are the candidates and the 'animals' array:
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

let animals = [
  candidateA,
  candidateB,
  candidateC,
  candidateD,
  candidateE,
  candidateF,
];

// Code your template literal and console.log statements:
let finalCrew = buildCrewArray(idsChosen, animals);
console.log(
  `${finalCrew[0].name}, ${finalCrew[1].name}, and ${finalCrew[2].name} are going to space!`,
);
