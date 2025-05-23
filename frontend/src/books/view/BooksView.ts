import Observer from "../../shared/Observer.js";
import BooksModel from "../model/BooksModel.js";
import BooksTemplate from "../template/BooksTemplate.js";

export default class BooksView extends Observer<BooksModel> {
    private readonly container: HTMLElement;
    private readonly booksHTML: HTMLElement;
    private readonly paginationHTML: HTMLElement;
    
    constructor(booksModel: BooksModel) {
        super(booksModel);
        this.container = document.createElement('books');
        this.booksHTML = document.createElement('booksData');
        this.paginationHTML = document.createElement('pagination');
    }
    
    readonly init = () => {
        console.log('BooksView initialized');
        this.render();
    }
    
    readonly render = async () => {
        const model = this.subject as BooksModel;
        console.log(model.getCurrentPage());
        const template = new BooksTemplate(model.getBooksData());

        this.booksHTML.innerHTML = await template.render();
        this.paginationHTML.innerHTML = template.renderPagination(model.getPages());
        this.assignPaginationEvent(model);

        document.getElementById(`${model.getCurrentPage()}`)?.classList.toggle('active');
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
        const pages: number[] = model.getPages();
        for (let i = 0; i < pages.length; i++) {
            const button = document.getElementById(`${pages[i]}`);
            button?.addEventListener('click', () => {
                model.setPage(pages[i] as number);
            })
        }
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