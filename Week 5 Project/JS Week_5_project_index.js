class Film {
    constructor(t){               // title constructor
        this.title = t;             // defining title film
    }
    getInfo(){                      //Logging the films and the star of the film
        console.log(`Title: ${this.title}`);
    }

}

class Library {      //theatre class that houses the array of "films"
    constructor (name) {
        this.name = name; 
        this.films = [];
    }
    addFilm(films){
        if (films instanceof Film)
        this.films.push(films);
    }

    
    removeFilm(films){ // Removes the instance of the film via the index number
        if (film instanceof Film)
        this.films.pop(films);
    }
    

    viewFilm(){         // Allows user to view the entire array
        return `${this.film} has ${this.films.length} films.`;
    }
}

class Menu {    // Builds a class containing and array for the menu options
    constructor () {
        this.films = [];
        this.selectedfilm = null;
    }

    start() {               // The function that houses the user options that will appear in the prompts
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case "1": 
                    this.addFilm();
                    break;
                case "2": 
                    this.removeFilm();
                    break;
                case "3": 
                    this.viewLibrary();
                    break;
                default: 
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert("Thank you for using the video library!"); // Alert for when the loop is broken by typing 0 and or hitting "okay"
    }
    
    showMainMenuOptions() {             // function that will show the user a basic GUI with 4 options
        return prompt (`
            0) Exit
            1) Add A Film
            2) Remove a Film
            3) View Film Library
        `);
    }

    viewLibrary() {
        let filmString = '';
        for (let i = 0; i < this.films.length; i++) {
            filmString += i + ') ' + this.films[i].name + '\n';
        }
        alert(filmString);
    }

    addFilm() {
        let name = prompt ('Enter Title for new Film:');
        this.films.push(new Library(name));
    }

    removeFilm() {
        let toss = prompt ('Enter the index for the film you wish to remove:');
        this.films.pop()
    }
}

let menu = new Menu();
menu.start();










