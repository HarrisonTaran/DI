

/*
//paragraphElement.textContent = "Hello Mars";

let person = {
    username : "John",
    isSignIn : true,
}

// if user is signed in add his name to h1

if(person["isSignedIn"]){
    // 1. retreiv h1
    let title = document.body.firstElementChild;
    title.textContent += `${person[username]}`
}
*/

/*
let divElement = document.body.firstElementChild;

let divElementSecond = document.body.children[0];

let ulElement = divElement.nextElementSibling;
let ulElementSecond = document.body.children[1];

let liElement = ulElement.lastElementChild;
let liElementSecond = ulElement.children[1];

console.log(divElement, divElementSecond);
console.log(ulElement, ulElementSecond);
console.log(liElement, liElementSecond);

liElementSecond.textContent += "smith" // adds last name 
*/

/*
let divContainer = document.getElementById("container");
let divContainerSecond = document.querySelector("#container");
let divContainerThird = document.getElementsByTagName("div")[0];

let ulElement = document.getElementsByTagName('ul');
let ulElementSecondPossibility = document.getElementsByClassName("list");
let ulElementThirdPossibility = document.document.querySelectorAll(".list");

for(let ul of ulElement){
    console.log(ul.children[0].textContent,ul.children[1].textContent)
}

for(let ul of ulElement){
    console.log(ul.children[0].textContent)
}
*/
/*
let anchor = document.getElementById('link');
anchor.textContent = "Click here";
anchor.setAttribute("href")
*/

/*--------------------------
Lise  5:36 AM
Exercise
let names = ["John", "Lola", "Tom"];
1. Create a function that adds the name of each students to 
a paragraph
2. each paragraph needs to be background yellow, font-size 25px
3. Add the 3 paragraph to the div already on the page
----------------------------*/

let names = ["John", "Lola", "Tom"];
let divContainer = document.getElementById('container');

function addStudents {
    for(let index = 0; index< names.length; index++){
        let newParagraph = document.creageElement("p");
        let newText = document.createTextNode(names[index]);
        // style
        newParagraph.style.backgroundColor = "yellow";
        newParagraph.style.fontsize = "25px";
        //add to new paragraph
        newParagraph.appendChild(newText)
        //add the new paragraph to the div container
        divContainer.appendChild(newParagraph);

    }
}


