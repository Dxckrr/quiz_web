export default class BooksController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    init = async () => {
        console.log('BooksController initialized');
        await this.model.init();
        this.view.init();
    };
    searchBooks = async (search) => {
        return this.model.searchBooks(search);
    };
    filterBooks = async (keywords) => {
        return this.model.filterByKeywords(keywords);
    };
}
