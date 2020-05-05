// ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

function boilingPoint (num) {
  if (num < 212)  {
    return (num + " is below boiling point");
  }
  else if (num == 212) {
    return "212 is at boiling point";
  }
  else if (num > 212) {
    return (num + " is above boiling point");
  }
  else return "error";
}

console.log(boilingPoint(temp1));
console.log(boilingPoint(temp2));
console.log(boilingPoint(temp3));

// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

function iteratorMultiplier (array) {
  for (let value in array)  {
    array[value] *= 5;
  }
  return array;
}

console.log(iteratorMultiplier(myNumbers1));


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

function mapMultiplier (array)  {
  return array.map(x => x * 5);
}

console.log(mapMultiplier(myNumbers2));


// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

function vowelRemover (string)  {
  //an array of vowels for the filter test to use.
  let vowelTest = ['a','e','i','o','u'];
  //if the string's current character does not exist within the array vowels, it passes the filter test.
  return string.split('').filter(value => vowelTest.indexOf(value.toLowerCase()) == -1).join('');
}

console.log(vowelRemover(stringWithVowels1));
console.log(vowelRemover(stringWithVowels2));


// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42


function vowelRemover2 (string)  {
  if (typeof(string) != "string") return "Not a string."
  //an array of vowels for the filter test to use.
  let vowelTest = ['a','e','i','o','u'];
  //if the string's current character does not exist within the array vowels, it passes the filter test.
  return string.split('').filter(value => vowelTest.indexOf(value.toLowerCase()) == -1).join('');
}

console.log(vowelRemover2(notAString1));
console.log(vowelRemover2(notAString2));


// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

function onlyCats(array)  {
  let answer = [];
  //if the animal is a cat, move it to the array we will return
  for (let obj of array)  {
    if (obj.animal == 'cat') answer.push(obj);
  }
  return answer;
}

console.log(onlyCats(toonimals));

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

function nonCatNames (array)  {
  let string = "";
  //add the names of animals that are not cats onto the end of a string that we will return.
  for (let obj of array)  {
    if (obj.animal != 'cat') string = string.concat(`"${obj.name}" `);
  }
  return string;
}

console.log(nonCatNames(toonimals));
