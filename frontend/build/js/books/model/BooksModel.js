import Subject from "../../shared/Subject.js";
import NullBook from "../types/NullBook.js";
export default class BooksModel extends Subject {
    booksData;
    filteredBooks;
    currentPage;
    gridSize;
    constructor() {
        super();
        this.booksData = [NullBook];
        this.filteredBooks = [NullBook];
        this.currentPage = 1;
        this.gridSize = 5;
    }
    init = async () => {
        console.log('BooksModel initialized');
        this.booksData = await this.loadData();
        this.filteredBooks = this.booksData;
    };
    getBooksData = () => {
        console.log('filteredBooks:', this.filteredBooks);
        return this.filteredBooks.slice((this.currentPage - 1) * this.gridSize, this.currentPage * this.gridSize);
    };
    searchBooks = (search) => {
        if (search.length === 0) {
            this.filteredBooks = this.booksData;
        }
        else {
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
    };
    filterByKeywords = (keywords) => {
        if (keywords.length === 0) {
            this.filteredBooks = this.booksData;
        }
        else {
            this.filteredBooks = this.booksData.filter((book) => {
                const rawKeywords = book._keywords || "";
                const bookKeywords = rawKeywords
                    .split(",")
                    .map(k => k.trim().toLowerCase());
                return keywords.every((keyword) => bookKeywords.includes(keyword.toLowerCase()));
            });
        }
        this.notifyALL();
    };
    loadData = async () => {
        // class ip http://10.152.164.61:1802
        const books = await fetch('http://localhost:1802/ref/references');
        if (!books.ok) {
            return [NullBook];
        }
        const res = await books.json();
        return await res.papers;
    };
    // Pages functions
    getTotalPages = () => {
        const size = this.filteredBooks.length;
        return Math.ceil(size / this.gridSize);
    };
    nextPage = () => {
        if (this.currentPage < this.getTotalPages()) {
            this.setPage(this.currentPage + 1);
        }
        else if (this.currentPage === this.getTotalPages()) {
            this.setPage(1);
        }
    };
    previousPage = () => {
        if (this.currentPage > 1) {
            this.setPage(this.currentPage - 1);
        }
        else if (this.currentPage === 1) {
            this.setPage(this.getTotalPages());
        }
    };
    setPage = (n) => {
        this.currentPage = n;
        this.notifyALL();
    };
    getCurrentPage = () => this.currentPage;
}
