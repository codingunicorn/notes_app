"use strict";

// Event Listeners for UI Elements
const addNote = document.getElementsByClassName("add-note")[0];
const cancelNote = document.getElementById("cancel-note");


// change Theme

function setTheme() {
    let selectedOption = document.getElementById("styleSwitcher").selectedIndex;
    let CSStheme = document.getElementById("theme");  
    let chosenTheme = document.getElementsByTagName("option")[selectedOption].value;
    CSStheme.href = `./css/${chosenTheme}-theme.css`;
}

/* function toggleModal() {
    let modal = document.getElementsByClassName("modal")[0];
    modal.classList.toggle("invisible");
    console.log("I was toggled");
} */

addNote.addEventListener('click', toggleModal());
cancelNote.addEventListener('click', toggleModal());



function toggleModal() {
    let modal = document.getElementsByClassName("modal")[0];
  
    return function() {
        modal.classList.toggle("invisible");
        console.log("I was toggled");
    };
  }