let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

const storyWord = story.split(' ');


//define the callback function to keep the word of the storyWord
// if not equal to these three unnecessary words
const keepNecessaryWords = word => {

    return word !== 'extremely' && word !== 'literally' && word !== 'actually';
};
// apply callback function to storyWords array
const betterWords = storyWord.filter(keepNecessaryWords);


// save all overused words in order into the a new array
const findOverusedWords = word => {     // define the callback function used for
    return word === 'really' || word === 'very' || word === 'basically';
};

const foundOverusedWords = storyWord.filter(findOverusedWords);


// count times of overused words
const countTimesOfOverusedWords = () => {
    let count = [0, 0, 0];
    for (let i = 0; i < foundOverusedWords.length; i++) {
        if (foundOverusedWords[i] === 'really') {
            count[0] += 1;
        } else if (foundOverusedWords[i] === 'very') {
            count[1] += 1;
        } else {
            count[2] += 1;
        }
    }
    return `Times of the word 'really' used: ${count[0]}
Times of the word 'very' used: ${count[1]}
Times of the word 'basically' used: ${count[2]}`;
};


//Now, count how many sentences are in the paragraph.
// calculate how many '.' and '!' in the string.
const howManySentence = () => {
    let countSentence = 0;
    for (let i = 0; i < betterWords.length; i++) {      //iterate each words to check if including '.' or '!'
        if (betterWords[i].includes('.') || betterWords[i].includes('!')) {
            countSentence += 1;
        }
    }
    return countSentence;
};


//log word count, sentence count, times of overused words in a function
const logCounts = () => {
    return (console.log(storyWord.length) + console.log(howManySentence()) + console.log(countTimesOfOverusedWords()));
};
logCounts();

//log the betterWords in a single string
console.log(betterWords.join(' '));


// remove overused words every other times it appears.
const removeOtherOverusedWords = () => {
    // code here
};


// Write a function that finds the word that appears the greatest number of times.
const findWordsAppearsGreatestNum = () => {
    //code here
};


//Replaced overused words with something else.
const replaceOverusedWords = () => {
    //code here
};











