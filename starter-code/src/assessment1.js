// Write a function that returns the product of 2 numbers
function product(x, y) {
  if (isNaN(x + y)) {
    return false
  }
  return x * y
  //
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return num % 2 === 0
  //
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  let array = [a, b];
  array.sort();
  return array[array.length - 1]
  //
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (!Number(a && b && c)) {
    return false
  } let array = [a, b, c];
  array.sort();
  return array[array.length - 1]
  //
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (numbers.length === 0) { return 0 }
  if (!Array.isArray(numbers)) {
    return false
  }
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (!Number.isInteger(element)) {
      return false
    }
  }
  var total = numbers.reduce(function (a, b) {
    return a + b;
  });
  return total
}

//


// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if (numbers.length === 0) {
    return false

  }
  if (!Array.isArray(numbers)) {
    return false
  }

  numbers.sort(function (a, b) {

    if (a > b) {
      return 1
    } else {
      return -1
    }
  });
  return numbers[numbers.length - 1]
  //
}

// Return the longest string in an array
function longestString(strings) {

  if (strings.length === 0) {
    return false

  }
  if (!Array.isArray(strings)) {
    return false
  }

  strings.sort(function (a, b) {
    if (a.length > b.length) {
      return 1
    } else {
      return -1
    }
  });
  return strings[strings.length - 1]
  //

}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.length === 0) {
    return false

  }

  if (!Array.isArray(wordsArr)) {
    return false
  }
  return wordsArr.includes(word)
  //
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return false

  }
  if (!Array.isArray(wordsArr)) {
    return false
  }
  if (wordsArr.length === 0) { return false }
  for (let index = 0; index < wordsArr.length; index++) {

    const element = wordsArr[index];
    if (wordsArr.indexOf(wordsArr[index]) === wordsArr.lastIndexOf(wordsArr[index])) {


      return element
    }

  }
  return false
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  if ((personObj.firstName === undefined) || (personObj.lastName === undefined)) {
    return false

  }
  let name = `${personObj.firstName} ${personObj.lastName}`
  return name
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  if (!Array.isArray(matrix)){
    return false
  }
  if (matrix.length===0){
    return false
  }

  let resultado = 0

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] > resultado) {
        resultado = matrix[x][y];
      }
    }
  }
  return resultado

  //
}
