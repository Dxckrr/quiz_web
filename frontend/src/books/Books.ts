import BooksController from "./controller/BooksController.js";
import BooksModel from "./model/BooksModel.js";
import BooksView from "./view/BooksView.js";

export default class Books {
    private readonly booksController: BooksController;
    private readonly booksModel: BooksModel;
    private readonly booksView: BooksView;

    constructor() {
        this.booksModel = new BooksModel();
        this.booksView = new BooksView(this.booksModel);
        this.booksController = new BooksController(
            this.booksModel,
            this.booksView
        );
    }

    readonly init = async (): Promise<void> => {
        await this.booksController.init();
    }

    readonly getBooksHTML = (): HTMLElement => {
        return this.booksView.getBooksHTML();
    }

    readonly searchBooks = async (search: string): Promise<void> => {
        return this.booksController.searchBooks(search);
    }
    readonly filterBooks = async (filter: string[]): Promise<void> => {
        return this.booksController.filterBooks(filter);
    }
}