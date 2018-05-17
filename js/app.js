"use strict";

// Event Listeners for UI Elements
let addNote = document.getElementsByClassName("add-note")[0];
let modal = document.getElementsByClassName("modal")[0];



addNote.addEventListener('click', toggleModal(modal));

// change Theme

function setTheme() {
    let selectedOption = document.getElementById("styleSwitcher").selectedIndex;
    let CSStheme = document.getElementById("theme");  
    let chosenTheme = document.getElementsByTagName("option")[selectedOption].value;
    CSStheme.href = `./css/${chosenTheme}-theme.css`;
}

/* function toggleModal(modal) {
    modal.classList.toggle("invisible");
}
 */
