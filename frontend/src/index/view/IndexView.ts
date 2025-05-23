import Books from "../../books/Books.js";
import Filter from "../../filter/FIlter.js";
import Searchbar from "../../searchbar/Searchbar.js";

export default class IndexView {
    private readonly main: HTMLElement;
    private readonly books: Books;
    private readonly searchbar: Searchbar;
    private readonly filter: Filter;

    constructor() {
        this.main = document.querySelector('main') as HTMLElement;
        if (!this.main) this.main = document.createElement('main');
        this.books = new Books();
        this.searchbar = new Searchbar(async (search: string) => await this.books.searchBooks(search));
        this.filter = new Filter(async (filterBy: string[]) => await this.books.filterBooks(filterBy));
    }

    readonly init = () => {
        console.log('IndexView initialized');
        this.initBooks();
        this.initSearchbar();
        this.initFilter();
    }

    readonly initBooks = () => {
        this.books.init();
        const booksHTML = this.books.getBooksHTML();
        const div = document.getElementById('container') as HTMLElement;
        div.appendChild(booksHTML);
    }

    readonly initSearchbar = () => {
        this.searchbar.init();
        const searchbarHTML = this.searchbar.getSearchbarHTML();
        const div = document.querySelector('.search') as HTMLElement;
        div.appendChild(searchbarHTML);
    }
    readonly initFilter = () => {
        this.filter.init();
    }

    readonly getIndexHTML = (): HTMLElement => {
        return this.main;
    }
}