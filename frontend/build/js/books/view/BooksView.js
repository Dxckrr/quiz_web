import Observer from "../../shared/Observer";
import BooksTemplate from "../template/BooksTemplate.js";
export default class BooksView extends Observer {
    booksHTML;
    constructor(booksModel) {
        super(booksModel);
        this.booksHTML = document.createElement("books");
    }
    init = () => {
        console.log('BooksView initialized');
    };
    render = () => {
        const template = new BooksTemplate();
        this.booksHTML.innerHTML = template.render();
    };
    update = () => {
        this.render();
    };
    getBooksHTML = () => {
        return this.booksHTML;
    };
}
