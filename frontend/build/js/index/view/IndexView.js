import Books from "../../books/Books";
import Searchbar from "../../searchbar/Searchbar";
export default class IndexView {
    main;
    books;
    searchbar;
    constructor() {
        this.main = document.querySelector('main');
        if (!this.main)
            this.main = document.createElement('main');
        this.books = new Books();
        this.searchbar = new Searchbar();
    }
}
