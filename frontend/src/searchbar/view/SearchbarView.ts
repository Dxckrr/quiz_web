import SearchbarTemplate from "../template/SearchbarTemplate.js";

export default class SearchbarView {
    private readonly SearchbarHTML;

    constructor(readonly searchBooksFn: (search: string) => Promise<void> ) {
        this.SearchbarHTML = document.createElement('searchbar') as HTMLElement;
    }

    readonly init = () => {
        console.log('SearchbarView initialized');
        this.SearchbarHTML.addEventListener('submit', async (e) => {
            e.preventDefault();
            this.searchBooks();
        })
        this.render();
    }

    readonly render = () => {
        const template = new SearchbarTemplate();
        this.SearchbarHTML.innerHTML = template.render();
    }

    readonly searchBooks = async () => {
        const input = this.SearchbarHTML.querySelector('input') as HTMLInputElement;
        const search = input.value;

        await this.searchBooksFn(search);
        this.render();
    }

    readonly getSearchbarHTML = (): HTMLElement => {
        return this.SearchbarHTML;
    }
}