
class NotesAjaxService {

    static POST(note, callback) {
        //this.call('', 'POST', note, callback);

        let url = 'http://localhost:2000/api/notes';
        let xhr = new XMLHttpRequest();
        console.log(note + "i wrote a note");
        let json = JSON.stringify(note);
        console.log(json);
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        console.log('ich bin vorm onload POST muahaha');
        xhr.onload = function () {
            let notes = JSON.parse(xhr.responseText);
            console.log("bitte gib mir de " + notes);
            if (xhr.readyState == 4 && xhr.status == "200") {
                console.table(notes);
                console.log('success');
                //callback(notes);
            }
            else {
                console.error(notes);
                console.log('error');
                //callback(notes);
            }
        }
        xhr.send(json);
    }

}

  

class NoteService {

    static getNotes(callback) {
       
        //TODO: fetch API here
    } 

   static GetNotes(callback) {
        NotesAjaxService.GET(null, callback);
    }

    /* static GetOneNote(note, callback) {
        //NotesAjaxService.GET(new NoteModel({_id: id}), callback);
        NotesAjaxService.GET(note, callback);
    } */

    static AddNote(note, callback) {
        NotesAjaxService.POST(note, callback);
    }

    /* static UpdateNote(note, callback) {
        console.log("jetzt simer im service update");
        console.log(note);
        console.log(note.id);
        NotesAjaxService.PUT(note, callback);
    }
    static DeleteNote(note, callback) {
        NotesAjaxService.DELETE(note, callback);
        console.log("deletenote im service" + note);
    }  */
}



