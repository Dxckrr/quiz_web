import Books from "../../books/Books";
import Searchbar from "../../searchbar/Searchbar";

export default class IndexView {
    private readonly main: HTMLElement;
    private readonly books: Books;
    private readonly searchbar: Searchbar;

    constructor() {
        this.main = document.querySelector('main') as HTMLElement;
        if (!this.main) this.main = document.createElement('main');
        this.books = new Books();
        this.searchbar = new Searchbar();
    }

    

}