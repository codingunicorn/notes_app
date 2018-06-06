'use strict';

class NoteController {
	constructor(noteView) {
	    this.noteView = noteView;
    }
    
    toggleModal() {
        let modal = document.getElementsByClassName("modal")[0];
      
        return function() {
            modal.classList.toggle("invisible");
        };
      }  


    setTheme() {
        
         return function() {
            let selectedOption = themeDropDown.selectedIndex;     
            let CSStheme = document.getElementById("theme");  
            let chosenTheme = document.getElementsByTagName("option")[selectedOption].value;    
            CSStheme.href = `./css/${chosenTheme}-theme.css`;
            //TODO: save selected theme in browser or on the servers
         }; 
    }  
    
    init() {
            this.noteView.init();
    }
}

const notesApp = new NoteController(noteView);
notesApp.init();
