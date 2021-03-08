"use strict";



document.addEventListener("DOMContentLoaded", start);



let splittext;



function start() {

//Create a global variable and select the text from the html
let sentence = document.querySelector("#cooltext");
    

//console.log(sentence);
    

//Split text into seperate letters/characters
splittext = sentence.textContent.split("");


//console.log(splittext); 


//Remove existing text 
sentence.textContent = "";

        
    for(let i = 0; i < splittext.length; i++){
        //console.log("For is working");


        const element = splittext[i];


        const span = document.createElement("span");


        if (element == " ") {
            span.classList.add("cooltext", "letter");

            span.style.setProperty("--delay", i);

            sentence.append(" ");

        } else{
            span.textContent = element;

            span.classList.add("cooltext", "letter");

            span.style.setProperty("--delay", i);

            sentence.append(span);
        };

    };
         
};