const myTweets=[
    {
        id: "101",
        account: "@LinusTorvald",
        body: "I've never told anyone this, but Tux is actually just a cat in a penguin costume",
        replays: 1,
        retweets: 120,
        like: 3432
    },
    {
        id:"182",
        account:"@LinusTorvald",
        body:"Steve Jobs thought that eating organic foods stopped you from sweting, abd therefore never had a shower",
        replays: 9,
        retweets: 1100,
        likes: 2100
    },
    {
        id:"103",
        account:"@LinusTorvald",
        body:"The fact I have got just under 400 followers in a week just confirms the theory that people love Linux",
        replays:0,
        retweets:674,
        likes: 54334
    }
];

tweet104 = {
    id:"104",
    account:"@LinusTorvald",
    body:"'Linux in the cloud' yet the cloud itself is running on Linux",
    replays:1,
    retweets: 100,
    likes: 300
};

function showTweets() {
    let output = "";
    myTweets.forEach(function (tweet){
        output += `<li> ${tweet.id} ${tweet.account} ${tweet.body} </li>`;
    });
    document.body.innerHTML = output;
}

function createTweet(newTweet, callback) {
    setTimeout(function() {
        myTweets.push(newTweet);
        callback();
    }, 2000);
}

createTweet(tweet104, showTweets);
