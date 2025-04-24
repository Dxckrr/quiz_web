import Books from "../../books/Books.js";
import Searchbar from "../../searchbar/Searchbar.js";
export default class IndexView {
    main;
    books;
    searchbar;
    constructor() {
        this.main = document.querySelector('main');
        if (!this.main)
            this.main = document.createElement('main');
        this.books = new Books();
        this.searchbar = new Searchbar(async (search) => await this.books.searchBooks(search));
    }
    init = () => {
        console.log('IndexView initialized');
    };
    initBooks = () => {
        this.books.init();
        const booksHTML = this.books.getBooksHTML();
        const div = document.getElementById('container');
        div.appendChild(booksHTML);
    };
    initSearchbar = () => {
        this.searchbar.init();
        const searchbarHTML = this.searchbar.getSearchbarHTML();
        const div = document.querySelector('.search');
        div.appendChild(searchbarHTML);
    };
    getIndexHTML = () => {
        return this.main;
    };
}
