const friends = requestAnimationFrame("../data/friends.js");

module.exports = function (app){
    app.get ("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post ("/api/friends", function(req, res){
        let totalDifference = 0;
        let bestMatch = {
            name: "", 
            photo: "",
            friendDifference: 1000
        };
    let userData = req.body; 
    let userName = userData.name; 
    let userScores = userData.scores; 

    let b = userScores.map(function (item){
        return parseInt(item, 10);
    });

    userData = {
        name: req.body.name, 
        photo: req.body.photo, 
        scores: b
    };
    
    console.log (`Name: ${userName}`); 
    console.log (`User Score: ${userScore}`); 

    let sum = b.reduce((a, b) => a + b, 0);
    console.log (`User's Sum Score: ${sum}`); 
    console.log (`Best Match Score Difference: ${bestMatch.friendDifference}`); 
    console.log (`*************************************************`);
    
    for (var i = 0; i < friends.length; i++){
        console.log(friends[i].name);
        totalDifference = 0; 
        console.log( `Total Difference: ${totalDifference}`); 
        console.log (`Best Match By Score ${bestMatch.friendDifference}`);

        let bfriendScore = friends[i].scores.reduce((a, b) => a + b , 0); 
        console.log( `Total friend score ${bfriendScore}`);
        totalDifference += Math.abs(sum - bfriendScore); 
        console.log(`*************************${totalDifference}`);
    }
    });
};