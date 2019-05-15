tweet104 = {
    id:"104",
    account:"@LinusTorvald",
    body:"'Linux in the cloud' yet the cloud itself is running on Linux",
    replays:1,
    retweets: 100,
    likes: 300
};

let tweets = new Promise(function(resolve, reject) {
    if(true){
        myTweets=[
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
        resolve(myTweets);
    } else {
        let reason=new Error("Failed");
        reject(reason);
    }
});

let postTweets= function(onetweet){
    tweets
        .then(function(tweet){
            tweet.push(onetweet);
            let output="";
            tweet.forEach(function(tw){
                output += `<li> ${tw.id} ${tw.account} ${tw.body} </li>`;
            });
            document.body.innerHTML=output;
        })
}
postTweets(tweet104);