import Subject from "../../shared/Subject.js";
import NullBook from "../types/NullBook.js";
export default class BooksModel extends Subject {
    booksData;
    filteredBooks;
    constructor() {
        super();
        this.booksData = [NullBook];
        this.filteredBooks = [NullBook];
    }
    init = async () => {
        console.log('BooksModel initialized');
        this.booksData = await this.loadData();
        this.filteredBooks = this.booksData;
    };
    getBooksData = () => {
        return this.filteredBooks;
    };
    loadData = async () => {
        return [NullBook];
    };
    searchBooks = (search) => {
        this.notifyALL();
    };
}
