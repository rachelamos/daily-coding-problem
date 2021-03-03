/* First Coding Challenge:
Given a list of numbers and a number 'k', return whether any two numbers from the list add up to 'k'.*/

function doTheyAddUp (a, b, k) {
    if (a + b === k) {
        return a + " + " + b + " = " + k;
    } else {
        return a + " + " + b + " does not equal " + k;
    }
}

doTheyAddUp(2, 15, 17);
console.log(doTheyAddUp(2, 15, 17));
doTheyAddUp(3, 12, 17);
console.log(doTheyAddUp(3, 12, 17));