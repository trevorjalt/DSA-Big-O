# Big O Notation

## 1) What is the Big O for this?

1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

````
A:

1) Constant O(1):  Because we get an immediate response.

2) Linear O(n): The run time will be directly proportional to the size (n) of the input
````

## 2) Even or odd

What is the Big O of the following algorithm? Explain your answer

````
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else
        return false;
    }
}
````

````
A:
Constant O(1).  It evaluates one value and immediately returns the result.
````

## 3) Are you here?

What is the Big O of the following algorithm? Explain your answer

````
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
````

````
A:
Polynomial O(n^k).  This function iterates through nested loops.  The time complexity grows by a constant power of 2.
````

## 4) Doubler

What is the Big O of the following algorithm? Explain your answer

````
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
````

````
A:
Linear O(n).  There is one step at each iteration.  The function will increase proportionally to the size of the input.
````

## 5) Naive search

What is the Big O of the following algorithm? Explain your answer

````
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
````

````
A:
Linear O(n).  This function checkes each element in the array to see if it is an exact match to an item.  The time complexity will increase proportionally to the size of the input.
````

## 6) Creating pairs

What is the Big O of the following algorithm? Explain your answer

````
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
````

````
A:
Polynomial O(n^k).  This function iterates through nested loops.  The time complexity grows by a constant power of 2. 
````

## 7) Compute the sequence

What does the following algorithm do? What is its runtime complexity? Explain your answer

````
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
````

````
A:
Linear O(n).  The time complexity will increase proportionally to the size of the input.
````

## 8) An efficient search

In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

````
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
````

````
A:
Logarithmic O(log(n)).  This function cuts the problem size in half each round through.
````

## 9) Random element

What is the Big O of the following algorithm? Explain your answer

````
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
````

````
A:
Constant O(1).  This function picks a random element from an array.
````

## 10) What Am I?

What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

````
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
````

````
A:
Linear O(n).  This function checks whether or not the number is a prime.  It only continues through if the number is prime.
````

## 11) Tower of Hanoi

The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk
Input:

Rod A	Rod B	Rod C
----		
---------		
-------------		
Output:

Rod A	Rod B	Rod C
----
---------
-------------
Derive an algorithm to solve the Tower of Hanoi puzzle.
Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
If you are given 5 disks, how do the rods look like after 7 recursive calls?
How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
What is the runtime of your algorithm?

````
A:
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

A2: AA, CCC
A3: 7, 15, 31
A4: exponential O(2^n)

````

## 12) Iterative Version

Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

````
A:

function countingSheep(num) {
  for (let i=num; i > 0; i--) {
    console.log( i + ': Another sheep jumps over the fence')
  }
  return 'All sheep jumped over the fence'
}
````

````
A: 

function powerCalculator(baseNum, expNum) {
  if (expNum < 0 ) {
    return 'exponent should be >= 0'
  }
  return baseNum ** expNum
}
````

````
A:

function reverseString(str) {
  let reversedStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i]
  }
  return reversedStr
}
````

````
A:

function triangularNumber(num) {
  let nth = 0
  for (let i = 0; i <= num; i++) {
    nth += i
  }
  return nth
}
````

````
A:

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
````

````
A:

function fibonacci(num) {
  let fib = [0, 1]

  for (let i = 2; i < num + 1; i++) {
    fib.push(fib[i-2] + fib[i-1])
  }
  return fib[num]
}
````

````
A:

function factorial(num) {
  if (num === 0) {
    return 1
  }
  for (let i = num -1; i >= 1; i--) {
    num *= i
  }
  return num
}
````

## 13) Recursive Big O

Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.

````
A:

1) Linear O(n) Time Complexity
2) Linear O(n) Time Complexity
3) Linear O(n) Time Complexity
4) Linear O(n) Time Complexity
5) Linear O(n) Time Complexity
6) Linear O(n) Time Complexity
7) Linear O(n) Time Complexity
8) Polynomial O(n^2) Time Complexity
9) Polynomial O(n^2) Time Complexity
10) Exponential O(2^n) Time Complexity
11) Exponential O(2^n) Time Complexity
12) Logarithmic O(log(n)) Time Complexity
````

## 14) Iterative Big O

Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.

````
A:

1) Linear O(n) Time Complexity
2) Linear O(n) Time Complexity
3) Linear O(n) Time Complexity
4) Linear O(n) Time Complexity
5) Linear O(n) Time Complexity
6) Linear O(n) Time Complexity
7) Linear O(n) Time Complexity
````