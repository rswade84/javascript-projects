//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(`${language.slice(0, 1)}${language.slice(4, 5)}`);

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.substring(0, 1).concat(language.substring(4, 5)));

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(
  `The abbreviation for ${language} is ${language
    .substring(0, 1)
    .concat(language.substring(4, 5))}`,
);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(
  `I'm loving ${language.trim().toUpperCase().replace('JAVA', 'JAVA ')}`,
);

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';

console.log(
  `${notTitleCase[0].slice(0, 1).toUpperCase()}${notTitleCase.slice(
    1,
    5,
  )} ${notTitleCase[6].slice(0, 1).toUpperCase()}${notTitleCase.slice(7, 10)}`,
);
