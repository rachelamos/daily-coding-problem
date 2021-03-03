/* Recently asked by Uber
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
*/

function multiArr(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (vari = 0; i < arr.length; i++)
     product *= arr[i][j];
        }
    return product;
}

console.log([3, 2, 1]);

/* Logic breakdown
1. create a function where an array will be the input.
2. create a for loop that goes through the array, multiplying all numbers in the array except the one at i.
3. this will need an if else statement or maybe a switch to not multiply if the same as i.
*/