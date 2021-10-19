// for loop : know ending point
// while loop : only if condition is true

//for (let counter =1; counter <=5; counter++){
//    console.log("hello counter is", counter);
//}

//let shopping = ["apple", "pear", "melon"];
//for (let index = 0; index < shopping.length; index++) {
//    console.log(shopping[index])
//}



//1. Loop over this array, and add to the array the word in plural ("s" at the end) of every fruit
let shopping = ["apple", "pear", "melon", "banana"];
for (let i = 0;  i < shopping.length; i++){
    shopping[i] += "s"
}

console.log(shopping); 

