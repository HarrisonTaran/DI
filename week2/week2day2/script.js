let shopping = ["apples", "pears", "bannana"];

let objectJs = {
    // key:value
    apple: 2,
    pear: 4,
    banna: 5,
};

//    retreive an element
//console.log(objectJs.apple);      // these 2 do the same        dot notation
//console.log(objectJs["apple"]);   // these 2 do the same        []notation

//    console.log(objectJs);


//let family = {
//    lastName: "Smith",
//    members: 4,
//    hasDog: true,
//   nameOfMembers: ["lea", "David", "mom", "dad"],
//    friends: {
//        name: "jack",
//        lastName: "buddy",
//        age: 12,
//        favoriteColors : ["red", "blue"],
//    }
//};

//console.log(family["members"]);

let sentence = "that movie was not bad, i liked it";

let arrSentence = sentence.split(" ");
console.log(arrSentence);

let indexWordBad = arrSentence.indexOf("bad");
let indexWordNot = arrSentence.indexOf("not");

if (indexWordBad>indexWordNot && indexWordBad !== -1 && indexWordNot !== -1){
    arrSentence.splice(indexWordNot, indexWordBad - indexWordNot + 1, "good")
}