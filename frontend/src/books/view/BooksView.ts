import Observer from "../../shared/Observer";
import BooksModel from "../model/BooksModel.js";
import BooksTemplate from "../template/BooksTemplate.js";

export default class BooksView extends Observer<BooksModel> {
    private readonly booksHTML;
    
    constructor(booksModel: BooksModel) {
        super(booksModel);
        this.booksHTML = document.createElement("books") as HTMLElement;
    }
    
    readonly init = () => {
        console.log('BooksView initialized');
    }
    
    readonly render = () => {
        const template = new BooksTemplate();
        this.booksHTML.innerHTML = template.render();
    }

    readonly update = () => {
        this.render();
    }

    readonly getBooksHTML = (): HTMLElement => {
        return this.booksHTML;
    }


}