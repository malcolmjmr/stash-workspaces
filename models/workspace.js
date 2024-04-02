class Resource {

    title;
    text;
    url;
    chat;
    note;
    created;
    updated;
    lastVisited;
    

    constructor({title, url, type = 'note'}) {
        if (title) this.title = title;
        if (url) this.url = url;
        this.type = type;
        creatd = date.now();
    }

    
}
