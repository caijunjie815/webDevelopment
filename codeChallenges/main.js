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
