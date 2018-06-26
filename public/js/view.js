'use strict';
/* UI Elements */

const addNote = document.getElementsByClassName("add-note")[0];
const cancleNote = document.getElementById("cancle-note");
const saveNote = document.getElementById("save-note");

const themeSwitcher = document.getElementById("switchTheme");
const themeDropDown = document.getElementById("themeOptions");

let noteContainer = document.getElementsByClassName("single-note");
const titleField = document.getElementById("title");
const descriptionField = document.getElementById("description");
const importanceField = document.getElementById("importance");
const duedateField = document.getElementById("duedate");

let notesContainer = document.getElementsByClassName("notes")[0];




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
        this.getTheme();
        this.setTheme();
        this.saveNewNote();
        this.showNotes();  
        this.editNote();
    }

    showNotes() {
       notesApp.getNotes();

    }

    showNote(notes) {

        //grab Template script
        let templateScript = document.getElementById('note-template').innerHTML;

        //compile template
        let noteTemplate = Handlebars.compile(templateScript);


        for (var prop in notes) {
            //console.log("note" + prop + " = " + notes[prop].notetitle);
            
            //pass Data in template
            let compiledHtml = noteTemplate(notes[prop]);
            let notePlaceholder = document.getElementsByClassName('single-note')[1];
            
            //add compiled html to the page 
            let clonedNote = notePlaceholder.cloneNode(true);
            clonedNote.innerHTML = compiledHtml;
            //add note to the container
            notesContainer.insertAdjacentElement("beforeend", clonedNote);
        }    
    }

    toggleModal() {
        // Event Listeners
        addNote.addEventListener('click', notesApp.toggleModal());
        cancleNote.addEventListener('click', notesApp.toggleModal());

        }
    
    getTheme() {
        notesApp.getTheme();

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
    notesContainer.addEventListener('click', function whenClicked(evt) {
        //call edit note when clicked  
        //TODO: render view
        console.log(evt.target);
        //notesApp.toggleModal(evt);
        //notesApp.toggleModal(evt.target);
        /* let modal = document.getElementsByClassName("modal")[0];
    
        modal.classList.toggle("invisible"); */
          
    });

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





