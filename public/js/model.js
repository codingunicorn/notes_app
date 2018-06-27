class NoteModel {

    static getNotes(callback) {
        fetch(`./api/notes`, {
        }).then(response => response.json())
        
        //.then(getNotes);
    }


   
}


class Note {
    constructor(notetitle, content, importance, duedate, finished) {
        this.notetitle = notetitle;
        this.content = content;
        this.importance = importance;
        this.duedate = duedate;
        this.finished = finished;
    }

    set(notetitle, content, importance, duedate, finished) {
        this.notetitle = notetitle;
        this.content = content;
        this.importance = importance;
        this.duedate = duedate;
        this.finished = finished;
    }
}