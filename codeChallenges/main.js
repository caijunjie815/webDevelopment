/*
The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the
person's age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.
Write your function here:*/
const canIVote = age => (age >= 18);    //return true if age >=18, and return false if age<18
console.log(canIVote(2));// Should print true


//Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the
//same and 'You disagree!' if the two strings are different.
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


// Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the
// following format: 'rank lastName reporting for duty!'
const reportingForDuty = (rank = 'top', lastName = 'cai') => `${rank} ${lastName} reporting for duty!`;
console.log(reportingForDuty());


//We wrote a function, rollTheDice(), which is supposed to simulate two dice being rolled and totalled. It's close to
// doing what we want, but there's something not quite right. Can you fix our code, please?
const rollTheDice = () => {
    // Math.random() gives us a random number from 0 up to, but not including, 1
    // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
    // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.floor(Math.random() * 6 + 1);
    let die2 = Math.floor(Math.random() * 6 + 1);
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


//It can be hard to keep track of what's truthy or falsy in JavaScript. Write a function, truthyOrFalsy(), that takes
// in any value and returns true if that value is truthy and false if that value is falsy.
const truthyOrFalsy = value => value ? true : false;
//cannot use the format: const truthyOrFalsy = value => value; as used in the first top function.
console.log(truthyOrFalsy(''));


//A person's number of imaginary friends are always 33% of their total friends.
// Write a function, numImaginaryFriends(), that takes in the total number of friends a person has and returns the
// number of imaginary friends they have.
// Since friends can only come in whole numbers, be sure to round your result before returning it.
// The JavaScript Math.round() function will come in handy. Check out the documentation here to figure out how it works.
const numImaginaryFriends = totalFriends => Math.round(0.33 * totalFriends);


//Write a function, sillySentence(), that has 3 string parameters and returns the following silly sentence with the
// blanks filled in by the arguments passed into the function:
const sillySentence = (adj, verb, noun) => `I am so ${adj} because I ${verb} coding! Time to write some more awesome ${noun}!`;


//Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently
// that age was (or will be) during that year. Handle three different cases:
// If the year is in the future, you should return a string in the following format:
// 'You will be [calculated age] in the year [year passed in]'
// If the year is before they were born, you should return a string in the following format:
// 'The year [year passed in] was [calculated number of years] years before you were born'
// If the year is in the past but not before the the person was born, you should return a string in the following format:
// 'You were [calculated age] in the year [year passed in]'
const howOld = (age, year) => {
    yearDifference = year - 2018;
    newAge = age + yearDifference;
    return (year > 2018) ? `You will be ${newAge} in the year ${year}`
        : (newAge <= 0) ? `The year ${year} was ${Math.abs(newAge)} years before you were born`
            : `You were ${newAge} in the year ${year}`;
};


//We wrote a function, whatRelation(), that has one number parameter, percentSharedDNA, and returns the likely
// relationship. We expect the number passed in to always be an integer from 0 to 100, but for some reason it's not working!
// Here's how it's supposed to calculate the relationship:
// 100 should return 'You are likely identical twins.'
// 35-99 should return 'You are likely parent and child or full siblings.'
// 14-34 should return 'You are likely grandparent and grandchild, aunt/uncle and neice/nephew, or half siblings.'
// 6-13 should return 'You are likely 1st cousins.'
// 3-5 should return 'You are likely 2nd cousins.'
// 1-2 should return 'You are likely 3rd cousins.'
// 0 should return 'You are likely not related.'
//
// Unfortunately, it's not working how we want!
const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    } else if (percentSharedDNA > 34) {
        return 'You are likely parent and child or full siblings.'
    } else if (percentSharedDNA > 13) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    } else if (percentSharedDNA > 5) {
        return 'You are likely 1st cousins.'
    }
    else if (percentSharedDNA > 2) {
        return 'You are likely 2nd cousins.'
    }
    else if (percentSharedDNA > 0) {
        return 'You are likely 3rd cousins'
    } else
        return 'You are likely not related.'
};


//Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received
// and a number representing the total cost.
// Return the tip, as a number, based on the following:
// 'bad' should return a 5% tip
// 'ok' should return a 15% tip
// 'good' should return a 20% tip
// 'excellent' should return a 30% tip
// all other inputs should default to 18%
const tipCalculator = (qos, cost) => {
    let factor;
    switch (qos) {
        case 'bad':
            factor = 5 / 100;
            break;
        case 'ok':
            factor = 15 / 100;
            break;
        case 'good':
            factor = 20 / 100;
            break;
        case 'excellent':
            factor = 30 / 100;
            break;
        default:
            factor = 18 / 100;
            break;
    }
    return factor * cost;
};


//Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string.
// Use a switch/case, and cover these cases:
// 'shrug' should return '|_{"}_|'
// 'smiley face' should return ':)'
// 'frowny face' should return':('
// 'winky face' should return ';)'
// 'heart' should return '<3'
// any other input should return '|_(* ~ *)_|'
const toEmoticon = emotion => {
    let emoticon = '';
    switch (emotion) {
        case 'shrug':
            emoticon = '|_{"}_|';
            break;
        case 'smiley face':
            emoticon = ':)';
            break;
        case 'frowny face':
            emoticon = ':(';
            break;
        case 'winky face':
            emoticon = ';)';
            break;
        case'heart':
            emoticon = '<3';
            break;
        default:
            emoticon = '|_(* ~ *)_|';
            break;
    }
    return emoticon;
};






























