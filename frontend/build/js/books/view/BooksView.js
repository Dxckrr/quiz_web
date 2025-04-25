import Observer from "../../shared/Observer.js";
import BooksTemplate from "../template/BooksTemplate.js";
export default class BooksView extends Observer {
    container;
    booksHTML;
    paginationHTML;
    constructor(booksModel) {
        super(booksModel);
        this.container = document.createElement('books');
        this.booksHTML = document.createElement('booksData');
        this.paginationHTML = document.createElement('pagination');
    }
    init = () => {
        console.log('BooksView initialized');
        this.render();
    };
    render = () => {
        const model = this.subject;
        const template = new BooksTemplate();
        this.booksHTML.innerHTML = template.render();
        this.paginationHTML.innerHTML = template.renderPagination(model.getTotalPages());
        this.assignPaginationEvent(model);
    };
    assignPaginationEvent = (model) => {
        const nextButton = document.getElementById('next-button');
        const prevButton = document.getElementById('prev-button');
        prevButton?.addEventListener('click', () => {
            model.previousPage();
        });
        nextButton?.addEventListener('click', () => {
            model.nextPage();
        });
    };
    update = () => {
        this.render();
    };
    getBooksHTML = () => {
        this.container.innerHTML = '';
        this.container.appendChild(this.booksHTML);
        this.container.appendChild(this.paginationHTML);
        return this.container;
    };
}
