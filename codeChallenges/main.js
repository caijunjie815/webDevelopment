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


//Write a function, lifePhase(), that takes in a person's age, as a number, and returns which phase of life they are in.
// Here are the classifications:
// 0-3 should return 'baby'
// 4-12 should return 'child'
// 13-19 should return 'teen'
// 20-64 should return 'adult'
// 65-140 should return 'senior citizen'
// If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'
const lifePhase = age => {
    // ternary operator of if...else if ..else statement
    return (age >= 0 && age <= 3) ? 'baby'
        : (age > 3 && age <= 12) ? 'child'
            : (age > 12 && age <= 19) ? 'teen'
                : (age > 19 && age <= 64) ? 'adult'
                    : (age > 64 && age <= 140) ? 'senior citizen'
                        : 'This is not a valid age';
};
console.log(lifePhase(189));


//Write a function, finalGrade(). It should:
//
// take three arguments of type number
// find the average of those three numbers
// return the letter grade (as a string) that the average corresponds to
// return 'You have entered an invalid grade.' if any of the three grades are less than 0 or greater than 100
// 0-59 should return: 'F'
// 60-69 should return: 'D'
// 70-79 should return: 'C'
// 80-89 should return: 'B'
// 90-100 should return: 'A'
const finalGrade = (grade1, grade2, grade3) => {
    if ((grade1 < 0 || grade1 > 100) || (grade2 < 0 || grade2 > 100) || (grade3 < 0 || grade3 > 100)) {
        return 'You have entered an invalid grade.';
    } else {
        const averageGrade = (grade1 + grade2 + grade3) / 3;
        return (averageGrade >= 0 && averageGrade < 60) ? 'F' :
            (averageGrade >= 60 && averageGrade < 70) ? 'D' :
                (averageGrade >= 70 && averageGrade < 80) ? 'C' :
                    (averageGrade >= 80 && averageGrade < 90) ? 'B' :
                        'A';
    }
};
console.log(finalGrade(65, 34, 94));


// Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the following format: 'rank lastName reporting for duty!'
const reportingForDuty = (rank, lastName) => `${rank} ${lastName} reporting for duty!`;
console.log(reportingForDuty());


//We wrote a function, rollTheDice(), which is supposed to simulate two dice being rolled and totalled. It's close to doing what we want, but there's something not quite right. Can you fix our code, please?
const rollTheDice = () => {
    // Math.random() gives us a random number from 0 up to, but not including, 1
    // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
    // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.floor(Math.random() * 6 + 1)
    let die2 = Math.floor(Math.random() * 6 + 1)
    return die1 + die2
};


//Write a function, calculateWeight(). It should:
// have two parameters: earthWeight and planet
// expect earthWeight to be a number
// expect planet to be a string
// return a number representing what that Earth-weight would equate to on the planet passed in.
// Handle the following cases:
// 'Mercury' weight = earthWeight * 0.378
// 'Venus' weight = earthWeight * 0.907
// 'Mars' weight = earthWeight * 0.377
// 'Jupiter' weight = earthWeight * 2.36
// 'Saturn' weight = earthWeight * 0.916
//For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
const calculateWeight = (earthWeight, planet) => {
    if (isNaN(earthWeight)) {
        return 'Invalid Earth Weight, please input a valid number';
    }
    let newPlanet = planet.charAt(0).toUpperCase() + planet.slice(1);
    return (newPlanet === 'Mercury') ? earthWeight * 0.378
        : (newPlanet === 'Venus') ? earthWeight * 0.907
            : (newPlanet === 'Venus') ? earthWeight * 0.377
                : (newPlanet === 'Venus') ? earthWeight * 2.36
                    : (newPlanet === 'Venus') ? earthWeight * 0.916
                        : 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
};
console.log(calculateWeight(100, 'Jupiter')); // Should print 236