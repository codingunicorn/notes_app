
/* UI Elements */

const addNote = document.getElementsByClassName("add-note")[0];
const cancelNote = document.getElementById("cancel-note");

const themeSwitcher = document.getElementById("switchTheme");
const themeDropDown = document.getElementById("themeOptions");

'use strict';

class NoteView {
	init() {
        this.toggleModal();
        this.setTheme();
           
    }

    toggleModal() {
        // Event Listeners
        addNote.addEventListener('click', notesApp.toggleModal());
        cancelNote.addEventListener('click', notesApp.toggleModal());
        }


    setTheme() {
        themeSwitcher.addEventListener('click', notesApp.setTheme());
        
}

}




const noteView = new NoteView();





