function gradeLabs(labs) {
  for (let i = 0; i < labs.length; i++) {
    let lab = labs[i];
    let result;
    try {
      result = lab.runLab(3);
    } catch (error) {
      result = 'Error Thrown';
    }
    console.log(`${lab.student} code worked: ${result === 27}`);
  }
}

let studentLabs2 = [
  {
    student: 'Blake',
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: 'Jessica',
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: 'Mya',
    runLab: function (num) {
      return num * num;
    },
  },
];

gradeLabs(studentLabs2);
