function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'Please provide an array';
    }
    console.log(Array.isArray(friends));
    let mega = friends[0];
    // for (const friend of friends) {
    //     if (friend.length > mega.length) {
    //         mega = friend;
    //     }
    // }
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

