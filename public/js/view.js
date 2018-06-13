'use strict';
/* UI Elements */

const addNote = document.getElementsByClassName("add-note")[0];
const cancleNote = document.getElementById("cancle-note");
const saveNote = document.getElementById("save-note");

const themeSwitcher = document.getElementById("switchTheme");
const themeDropDown = document.getElementById("themeOptions");

const titleField = document.getElementById("title");
const descriptionField = document.getElementById("description");
const importanceField = document.getElementById("importance");
const duedateField = document.getElementById("duedate");


class Note {
    constructor(notetitle, content, importance, duedate) {
        this.notetitle = notetitle;
        this.content = content;
        this.importance = importance;
        this.duedate = duedate;
    }

    set(notetitle, content, importance, duedate) {
        this.notetitle = notetitle;
        this.content = content;
        this.importance = importance;
        this.duedate = duedate;
    }
}


class NoteView {
	init() {
        this.toggleModal();
        this.setTheme();
        this.saveNewNote();
        this.showNotes();   
    }

    showNotes() {
       notesApp.getNotes();

    }

    toggleModal() {
        // Event Listeners
        addNote.addEventListener('click', notesApp.toggleModal());
        cancleNote.addEventListener('click', notesApp.toggleModal());
        }


    setTheme() {
        themeSwitcher.addEventListener('click', notesApp.setTheme());
        
    }

    saveNewNote() {
        //TODO: get all Form Elements 
        
        //send to Controller
        saveNote.addEventListener('click', notesApp.saveNote());
        
    }

    editNote() {
        //TODO: update Note
    }

    finishNote() {
        //TODO: mark Note as done
    }

    deleteNote() {
        //TODO: delete Note
    }

    sortNotes() {
        //TODO: create Sorting functionality
    }

}


const noteView = new NoteView();





