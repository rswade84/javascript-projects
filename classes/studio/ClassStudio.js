//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
  constructor(name, mass, scores = []) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }

  addScore(newScore) {
    this.scores.push(newScore);
  }

  average() {
    let sum = 0;

    for (let i = 0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }
    let average = sum / this.scores.length;
    return Math.round(10 * average) / 10;
  }

  status() {
    let avg = this.average();
    if (avg >= 90) {
      return 'Accepted';
    } else if (avg >= 80) {
      return 'Reserve';
    } else if (avg >= 70) {
      return 'Probationary';
    } else {
      return 'Rejected';
    }
  }
}

let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate('Glad Gator', 225, [75, 58, 62]);

console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);

bubbaBear.addScore(83);
console.log(bubbaBear.scores);

console.log(merryMaltese.average());

let candidates = [bubbaBear, merryMaltese, gladGator];
for (let i = 0; i < candidates.length; i++) {
  console.log(
    `${candidates[i].name} earned an average test score of ${candidates[
      i
    ].average()} and has a status of ${candidates[i].status()}`,
  );
}

let testCount = 0;

while (gladGator.status() === 'Probationary') {
  gladGator.addScore(100);
  testCount++;
}

console.log(
  `It will take at least ${testCount} tests to reach 'Reserve' status.`,
);

while (gladGator.status() === 'Reserve') {
  gladGator.addScore(100);
  testCount++;
}

console.log(
  `It will take at least ${testCount} tests to reach 'Accepted' status.`,
);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
