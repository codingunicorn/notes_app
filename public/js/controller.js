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
        
        //TODO:  Note im Model ablegen
        let saveThisNote = new Note(
            titleField.value, 
            descriptionField.value,
            importanceField.value, 
            duedateField.value
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

    getNotes() {

    
    }
    

    
    init() {
            this.noteView.init();
    }

}

const notesApp = new NoteController(noteView);
notesApp.init();
