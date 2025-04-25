import Subject from "../../shared/Subject.js";
import Book from "../types/Book.js";
import NullBook from "../types/NullBook.js";
import BooksView from "../view/BooksView.js";

export default class BooksModel extends Subject<BooksView>{
    private booksData: Book[];
    private filteredBooks: Book[];
    private currentPage: number;
    private readonly gridSize: number;

    constructor() {
        super();
        this.booksData = [NullBook];
        this.filteredBooks = [NullBook];
        this.currentPage = 1;
        this.gridSize = 5;
    }

    readonly init = async () => {
        console.log('BooksModel initialized');
        this.booksData = await this.loadData();
        this.filteredBooks = this.booksData;
    }

    readonly getBooksData = (): Book[] => {
        return this.filteredBooks.slice(
            (this.currentPage - 1) * this.gridSize, 
            this.currentPage * this.gridSize
        );
    }

    readonly searchBooks = (search: string) => {
        if (search.length === 0) {
            this.filteredBooks = this.booksData
        } else {
            this.filteredBooks = this.booksData.filter((books) => {
                const title = books._title?.toLowerCase() || "";
                const year = books._year?.toString() || "";
                const author = books._author?.toString() || "";
                const extract = books._abstract?.toString() || "";

                const aws = [title, year, author, extract].join(" ");
                return aws.includes(search.toLowerCase());
            });
        }
        this.notifyALL();
    }

    readonly loadData = async(): Promise<Book[]> =>{
        const books= await fetch('http://10.152.164.61:1802/ref/references')
        if(!books.ok){
            return [NullBook]
        }
        return await books.json()
    }

    // Pages functions
    readonly getTotalPages = (): number => {
        const size = this.filteredBooks.length;
        return Math.ceil(size / this.gridSize);
    }

    readonly nextPage = () => {
        if (this.currentPage < this.getTotalPages()) {
            this.setPage(this.currentPage + 1);
        }
        else if (this.currentPage === this.getTotalPages()) {
            this.setPage(1);
        }
    }

    readonly previousPage = () => {
        if (this.currentPage > 1) {
            this.setPage(this.currentPage - 1);
        }
        else if (this.currentPage === 1) {
            this.setPage(this.getTotalPages());
        }
    }

    readonly setPage = (n: number) => {
        this.currentPage = n;
        this.notifyALL();
    }

    readonly getCurrentPage = (): number => this.currentPage;
}