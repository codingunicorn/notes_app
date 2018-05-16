"use strict";




// change Theme

function setTheme() {
    let selectedOption = document.getElementById("styleSwitcher").selectedIndex;
    let CSStheme = document.getElementById("theme");  
    let chosenTheme = document.getElementsByTagName("option")[selectedOption].value;
    CSStheme.href = `./css/${chosenTheme}-theme.css`;
}

