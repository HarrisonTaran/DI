var database = [
    {
        username: "andre",
        password: "supersecret"
    },

    {
        username: "sally",
        password: "123"
    },

    {
        username: "ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning"
    },

    {
        username: "Sally",
        timeline: "Javascript is sooo cool"
    },

    {
        username: "Mitch",
        timeline: "Javascript is prety cool"
    }
];

var userNamePrompt = prompt("whats your username?");
var passwordPrompt = prompt("Whats your password?");

function signIn(username, password) {
    for(var i=0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password){
            console.log(newsFeed);
        } else {
            alert("sorry wrong username or password");
        }
    }
}

    //if(user === database[0].username && pass === database[0].password){
    //    console.log(newsFeed)
    //} else {
    //    alert("sorry, wrong username or password");
    //}
//}

signIn(userNamePrompt, passwordPrompt);






