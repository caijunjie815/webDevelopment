//Take a phrase like 'turpentine and turtles' and translate it into its "whale talk" equivalent: 'UUEEIEEAUUEE'.
// There are a few simple rules for translating text to whale language:
// There are no consonants. Only vowels excluding "y".
// The u's and e's are extra long, so we must double them in our program.


// Create a variable named input that is equal to any phrase you'd like. This variable will contain the text you want
// to translate into “whale talk”.
//Whales only speak in vowels so you need an array of vowels to be extracted from the input variable.
// Set the array equal to a variable named vowels that will not be updated.
// Note: Whales don't consider "y" a vowel.

let input = 'turpentine and turtles';

//Whales only speak in vowels so you need an array of vowels to be extracted from the input variable.
// Set the array equal to a variable named vowels that will not be updated.
// Note: Whales don't consider "y" a vowel.

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];       // save the vowels from the input string

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
            break;
        }
    }
    if ((input[i] === 'e') || (input[i] === 'u')) {
        resultArray.push(input[i]);
    }
}
console.log(resultArray.join('').toUpperCase());