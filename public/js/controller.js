class NoteController {
	constructor(noteView) {

        fetch(`./api/notes/`, {
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
        
        let saveThisNote = new Note(
            titleField.value, 
            descriptionField.value,
            importanceField.value, 
            duedateField.value,
            false
        );   
        console.log(saveThisNote);

        //push data to DB        
        fetch(`./api/notes`, {
          method: 'POST', // or 'PUT'?
          body: JSON.stringify(saveThisNote),
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

        //Service.addNote aufrufen und Note übergeben
        //NotesService.AddNote(saveThisNote);
        };
    }

    updateNote() {

        console.log("we're in the updateNote");

        console.log(event.path[3]);
        let thisNote = event.path[3];
        console.log(thisNote.childNodes[3].value);

        let saveUpdatedNote = new Note(
            thisNote.childNodes[1].value,
            thisNote.childNodes[3].value,
            thisNote.childNodes[9].value,
            thisNote.childNodes[13].value
        );   

        console.log(saveUpdatedNote);

            let noteID = thisNote.childNodes[11].value;
            console.log("hani jetzt d ID" + noteID);


            fetch(`./api/notes`, {
              method: 'PATCH',
              headers:{
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(saveUpdatedNote)
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }

    deleteNote() {
        let thisNote = event.path[1];
        console.log(thisNote);
        let noteID = thisNote.childNodes[11].value;
        console.log("I'm deleting it" + noteID);        
        fetch(`./api/notes/` + noteID, {
            method: 'delete',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(thisNote)
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
    
    }
    

    
    init() {
            this.noteView.init();
    }

}

const notesApp = new NoteController(noteView);
notesApp.init();
