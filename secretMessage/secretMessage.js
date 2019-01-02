let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,',
    'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);
//Use an array method to remove the last string of the array secretMessage.
secretMessage.pop();
console.log(secretMessage.length);

//Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.
secretMessage.push('to', 'Program');

const index = secretMessage.indexOf('easily');
secretMessage[index] = 'right';
console.log(secretMessage);


secretMessage.shift();
secretMessage.unshift('Programming');

//Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.

secretMessage.splice(secretMessage.indexOf('get'), 5, 'know');

console.log(secretMessage.join(' '));