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
            //localStorage.setItem("theme", chosenTheme);
         }; 
    }  

    saveNote() {
        return function() {
        console.log("hi");    
        //TODO:  Note im Model ablegen
        let saveThisNote = new Note(
            titleField.value, descriptionField.value,
            importanceField.value, duedateField.value
        );
        console.log(saveThisNote);
        saveThisNote = JSON.stringify(saveThisNote); 
        if(localStorage.notes == undefined) {
            localStorage.setItem("notes", saveThisNote);
        }
        else {
            let localStorageData = localStorage.notes;
            localStorageData = localStorageData + saveThisNote;
            localStorage.setItem("notes", localStorageData);
            }
        };
    }
    
    init() {
            this.noteView.init();
    }

}

const notesApp = new NoteController(noteView);
notesApp.init();
