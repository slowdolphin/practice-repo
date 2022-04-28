// 509. Fibonacci Number

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

//I worked backwards, I made an array with the numbers from the sqeunce and pushed the rest of the numbers in based on the n. I then noticed that n represented the index of that number, so it was clear to ask for the arry[n]
var fib = function(n) {
      let start = [0, 1]
  for(let i = 0; i < n; i++) { 
    start.push(  start[i] + start[i+1])
  }
  return start[n]  
};

// 1137. N-th Tribonacci Number
// The Tribonacci sequence Tn is defined as follows: 

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

//similar to the above, but this time with 1 additional requirement.
var tribonacci = function(n) {
  let start = [0, 1, 1]
  for(let i = 0; i < n; i++) { 
    start.push(  start[i] + start[i+1] + start[i+2])
  }
  return start[n]
};


// // 70. Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//this is basically the fib sqeunce, but you start at 1,1 instead of 0,1. This is because there is always at least 1 way to get to the next step.Also you can look at it as 2 single steps, or 1 2step.

var climbStairs = function(n) {
  let start = [1, 1]
  for(let i = 0; i < n; i++) { 
    start.push(  start[i] + start[i+1])
  }
  console.log(start[n] )
};

climbStairs(2)
climbStairs(3)
