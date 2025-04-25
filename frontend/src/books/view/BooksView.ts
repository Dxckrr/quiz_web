import Observer from "../../shared/Observer.js";
import BooksModel from "../model/BooksModel.js";
import BooksTemplate from "../template/BooksTemplate.js";

export default class BooksView extends Observer<BooksModel> {
    private readonly container: HTMLElement;
    private readonly booksHTML: HTMLElement;
    private readonly paginationHTML: HTMLElement;
    
    constructor(booksModel: BooksModel) {
        super(booksModel);
        this.container = document.createElement('books') as HTMLElement;
        this.booksHTML = document.createElement('booksData') as HTMLElement;
        this.paginationHTML = document.createElement('pagination') as HTMLElement;
    }
    
    readonly init = () => {
        console.log('BooksView initialized');
        this.render();
    }
    
    readonly render = () => {
        const model = this.subject as BooksModel;
        const template = new BooksTemplate();

        this.booksHTML.innerHTML = template.render();
        this.paginationHTML.innerHTML = template.renderPagination(model.getTotalPages());
        this.assignPaginationEvent(model);
    }

    private readonly assignPaginationEvent = (model: BooksModel) => {
        const nextButton = document.getElementById('next-button');
        const prevButton = document.getElementById('prev-button');
        
        prevButton?.addEventListener('click', () => {
            model.previousPage();
        })
        nextButton?.addEventListener('click', () => {
            model.nextPage();
        })
    }

    readonly update = () => {
        this.render();
    }

    readonly getBooksHTML = (): HTMLElement => {
        this.container.innerHTML = '';
        this.container.appendChild(this.booksHTML);
        this.container.appendChild(this.paginationHTML);
        return this.container;
    }
}