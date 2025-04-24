import Subject from "../../shared/Subject.js";
import Book from "../types/Book.js";
import NullBook from "../types/NullBook.js";
import BooksView from "../view/BooksView.js";

export default class BooksModel extends Subject<BooksView>{
    private booksData: Book[];
    private filteredBooks: Book[];

    constructor() {
        super();
        this.booksData = [NullBook];
        this.filteredBooks = [NullBook];
    }

    readonly init = async () => {
        console.log('BooksModel initialized');
        this.booksData = await this.loadData();
        this.filteredBooks = this.booksData;
    }

    readonly getBooksData = (): Book[] => {
        return this.filteredBooks;
    }

    readonly loadData = async (): Promise<Book[]> => {
        
        return [NullBook]
    }

    readonly searchBooks = () => {

    }

}