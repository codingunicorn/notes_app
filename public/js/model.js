class NoteModel {

    static getNotes(callback) {
        fetch(`./api/notes`, {
        }).then(response => response.json())
        
        //.then(getNotes);
    }


   
}


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