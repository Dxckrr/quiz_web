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
    render = async () => {
        const model = this.subject;
        console.log(model.getCurrentPage());
        const template = new BooksTemplate(model.getBooksData());
        this.booksHTML.innerHTML = await template.render();
        this.paginationHTML.innerHTML = template.renderPagination(model.getPages());
        this.assignPaginationEvent(model);
        document.getElementById(`${model.getCurrentPage()}`)?.classList.toggle('active');
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
        const pages = model.getPages();
        for (let i = 0; i < pages.length; i++) {
            const button = document.getElementById(`${pages[i]}`);
            button?.addEventListener('click', () => {
                model.setPage(pages[i]);
            });
        }
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
