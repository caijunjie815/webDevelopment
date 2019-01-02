//Imagine you're a big-whig programmer for a social media platform! You have been tasked with building a prototype for
// a mutual followers program. You'll need two arrays of “friends” from two mock users so that you can extract the
// names of the followers who exist in both lists. Make a variable called bobsFollowers and set it equal to an array
// with four strings representing the names of Bob's friends.

let bobsFollowers = ['Eddy', 'Apple', 'Alice', 'David'];
let tinasFollowers = ['Lina', 'Apple', 'Eddy'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(tinasFollowers[j]);
        }
    }
}
console.log(mutualFollowers);