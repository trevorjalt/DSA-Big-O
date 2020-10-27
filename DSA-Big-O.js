// towerOfHanoi Option 1 
// function towerOfHanoi (disk, source, intermediate, destination) {
//   // if disk is equal to 1, then move disk from source to destination
//   if (disk === 1) {
//     console.log(`${source}: moved to ${destination}`)
//   }
//   // else
//   //   towerOfHanoi(disk -1, source, destination, intermediate)
//   //   move disk from source to destination
//   //   tower(disk-1, intermediate, source, destination)
//   // end if
//   else {
//     towerOfHanoi(disk - 1, source, destination, intermediate)
//     towerOfHanoi(1, source, intermediate, destination)
//     // console.log(`${source}: moved to ${destination}`)
//     towerOfHanoi(disk - 1, intermediate, source, destination)
//   }
// }

// towerOfHanoi(3, 'A', 'B', 'C')

//  aa, ccc
// 7, 15, 31
// exponential: O(2^n) time complexity


// towerOfHanoi Option 2 
function towerOfHanoi(n, source, dest, temp){
    if(n===1){
        console.log(`Move from ${source} to ${dest}`);
    }
    else{
        towerOfHanoi(n-1, source, temp, dest);
        towerOfHanoi(1, source, dest, temp);
        towerOfHanoi(n-1, temp, dest, source);
    }
};

towerOfHanoi(3, 'A', 'C', 'B')



// Iterative functions

function countingSheep(num) {
  for (let i=num; i > 0; i--) {
    console.log( i + ': Another sheep jumps over the fence')
  }
  return 'All sheep jumped over the fence'
}

countingSheep(10)
// Linear O(n) Time Complexity



function powerCalculator(baseNum, expNum) {
  if (expNum < 0 ) {
    return 'exponent should be >= 0'
  }
  return baseNum ** expNum
}

powerCalculator (10, 2)
// Linear O(n) Time Complexity



// ReverseString: Option 1
function reverseString(str) {
  let reversedStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i]
  }
  return reversedStr
}

// ReverseString: Option 2
// function reverseString(str) {
//   return str.split('').reverse().join('')
// }

// ReverseString: Option 3
// function reverseString(str) {
//   let reversedStr=''
//   for (let char of str) {
//     reversedStr = char + reversedStr
//   }
//   return reversedStr
// }

// ReverseString: Option 4
// function reverseString(str) {
//   return [...str].reverse().join('')
// }

// ReverseString: Option 5
// function reverseString(str) {
//   return str.split('').reduce((reverse, char) => char + reverse, '')
// }

reverseString('hello')
// Linear O(n) Time Complexity



function triangularNumber(num) {
  let nth = 0
  for (let i = 0; i <= num; i++) {
    nth += i
  }
  return nth
}

triangularNumber(9)
// Linear O(n) Time Complexity



function stringSplitter(str, char) {
  let result = ['']

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      result.push('')
    } else {
      result[result.length - 1] += str[i]
    }
  }

  return result
}

stringSplitter('20/20/2020', '/')
// Linear O(n) Time Complexity



function fibonacci(num) {
  let fib = [0, 1]

  for (let i = 2; i < num + 1; i++) {
    fib.push(fib[i-2] + fib[i-1])
  }
  return fib[num]
}

fibonacci(7)
// Linear O(n) Time Complexity



function factorial(num) {
  if (num === 0) {
    return 1
  }
  for (let i = num -1; i >= 1; i--) {
    num *= i
  }
  return num
}

factorial(5)
// Linear O(n) Time Complexity