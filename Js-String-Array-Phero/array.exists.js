function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'Please provide an array';
    }
    console.log(Array.isArray(friends));
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'Lion', 'Shamol', 'Sabbir'];
const myBigBuddy = megaFriend(friends);
console.log(myBigBuddy);

const nonArray = megaFriend(1245);
console.log(nonArray)


console.log(friends.indexOf('Fox')) // That means there is no Fox in friends array
if (friends.indexOf('Fox') != -1) {
    console.log('Lion exists');
}

else {
    console.log("Fox doesn't exists")
}
// includes
if (friends.includes('Lion')) {
    console.log('Lion exits using includes'); // Checking that is lion exists in friends array.
}
console.log(friends);

// concat
const first = [1, 3, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined);