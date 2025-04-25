import BooksModel from "../model/BooksModel.js";
import BooksView from "../view/BooksView.js";

export default class BooksController {
    
    constructor(
        private readonly model: BooksModel,
        private readonly view: BooksView
    ) {}

    readonly init = async (): Promise<void> => {
        console.log('BooksController initialized');
        await this.model.init();
        this.view.init();
    }

    readonly searchBooks = async (search: string): Promise<void> => {
        return this.model.searchBooks(search);
    }
    readonly filterBooks = async (keywords: string[]): Promise<void> => {
        return this.model.filterByKeywords(keywords);
    }
}