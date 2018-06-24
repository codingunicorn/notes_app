class NoteController {
	constructor(noteView) {

        fetch(`./api/notes`, {
        }).then(response => response.json()).then(printNotes);

        
        function printNotes(data) {
            console.log(data);
        }


	    this.noteView = noteView;
    }

    
    toggleModal() {
        let modal = document.getElementsByClassName("modal")[0];
      
        return function() {
            modal.classList.toggle("invisible");
        };
      }  

    getTheme() {
        let selectedTheme = localStorage.theme;
        console.log(selectedTheme);
        let CSStheme = document.getElementById("theme"); 
        CSStheme.href = `./css/${selectedTheme}-theme.css`;
    }

    setTheme() {
        
         return function() {
            let selectedOption = themeDropDown.selectedIndex;     
            let CSStheme = document.getElementById("theme");  
            let chosenTheme = document.getElementsByTagName("option")[selectedOption].value;    
            CSStheme.href = `./css/${chosenTheme}-theme.css`;
            //TODO: save selected theme in browser or on the servers
            localStorage.setItem("theme", chosenTheme);
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
        saveThisNote = JSON.stringify(saveThisNote); 
        if(localStorage.notes == undefined) {
            localStorage.setItem("notes", saveThisNote);
        }
        else {
            let localStorageData = localStorage.notes;
            localStorageData = localStorageData + saveThisNote;
            localStorage.setItem("notes", localStorageData);
            }
            NotesService.AddNote(note);
        };
    }

    getNotes() {

         //TODO: get Notes Data
         let notes = localStorage.notes;
         console.log(notes, typeof(notes));
        
        
        //TODO: render Notes Data in HTML (2.0 with Handlebars)

        /* notes.forEach(function(note) {
            const noteHolder = document.createElement("li");
            cardDiv.className = `card ${card.name}`;
            cardDiv.style.backgroundImage = `linear-gradient(grey, grey), url('img/${card.img}')`;
            grid.insertAdjacentElement('beforeend', cardDiv).innerHTML = `<i class="${card.name}></i>`; 
        }, this); */
    }

    
    init() {
            this.noteView.init();
    }

}

const notesApp = new NoteController(noteView);
notesApp.init();
