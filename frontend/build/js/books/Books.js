import BooksController from "./controller/BooksController";
import BooksModel from "./model/BooksModel";
import BooksView from "./view/BooksView";
export default class Books {
    booksController;
    booksModel;
    booksView;
    constructor() {
        this.booksModel = new BooksModel();
        this.booksView = new BooksView(this.booksModel);
        this.booksController = new BooksController(this.booksModel, this.booksView);
    }
    init = async () => {
        await this.booksController.init();
    };
    getBooksHTML = () => {
        return this.booksView.getBooksHTML();
    };
    searchBooks = async (search) => {
        return this.booksController.searchBooks(search);
    };
}
