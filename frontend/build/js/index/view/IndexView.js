import Books from "../../books/Books.js";
import Filter from "../../filter/FIlter.js";
import Searchbar from "../../searchbar/Searchbar.js";
export default class IndexView {
    main;
    books;
    searchbar;
    filter;
    constructor() {
        this.main = document.querySelector('main');
        if (!this.main)
            this.main = document.createElement('main');
        this.books = new Books();
        this.searchbar = new Searchbar(async (search) => await this.books.searchBooks(search));
        this.filter = new Filter(async (filterBy) => await this.books.filterBooks(filterBy));
    }
    init = () => {
        console.log('IndexView initialized');
        this.initBooks();
        this.initSearchbar();
        this.initFilter();
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
    initFilter = () => {
        this.filter.init();
    };
    getIndexHTML = () => {
        return this.main;
    };
}
