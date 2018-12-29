/*
The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person's age,
and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.
Write your function here:*/
const canIVote = age => (age >= 18);    //return true if age >=18, and return false if age<18
console.log(canIVote(2));// Should print true


//Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.8
const agreeOrDisagree = (string1, string2) => {
    return (string2 === string1) ? 'You agree!' : 'You disagree!';      //Ternary Operator

    /*equal to if statement
    if (string1 === string2) {
        return 'You agree!';
    } else
        return 'You disagree!';*/
};
console.log(agreeOrDisagree());