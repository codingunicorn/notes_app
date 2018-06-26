class NoteController {
	constructor(noteView) {

        fetch(`./api/notes`, {
        }).then(response => response.json()).then(displayData);

        
        function displayData(data) {
            let notes = data;
            noteView.showNote(data);
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
        /* let note = new Notelike(document.getElementById('title').value,
        document.getElementById('description').value, document.getElementById('importance').value,
        document.getElementById('enddate').value);
        console.log(note); */


        let saveThisNote = new Note(
            titleField.value, 
            descriptionField.value,
            importanceField.value, 
            duedateField.value
        );
        console.log(saveThisNote);

        //Service.addNote aufrufen und Note übergeben
        //NotesService.AddNote(saveThisNote);
        


        /* saveThisNote = JSON.stringify(saveThisNote); 
        if(localStorage.notes == undefined) {
            localStorage.setItem("notes", saveThisNote);
        }
        else {
            let localStorageData = localStorage.notes;
            localStorageData = localStorageData + saveThisNote;
            localStorage.setItem("notes", localStorageData);
            }
            NotesService.AddNote(note); */

        };
    }

    getNotes() {

       /*  notes.forEach(function(note) {
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
