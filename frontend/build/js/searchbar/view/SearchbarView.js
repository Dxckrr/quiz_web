import SearchbarTemplate from "../template/SearchbarTemplate.js";
export default class SearchbarView {
    searchBooksFn;
    SearchbarHTML;
    constructor(searchBooksFn) {
        this.searchBooksFn = searchBooksFn;
        this.SearchbarHTML = document.createElement('searchbar');
        this.SearchbarHTML.classList.add('search-input');
    }
    init = () => {
        console.log('SearchbarView initialized');
        this.SearchbarHTML.addEventListener('submit', async (e) => {
            e.preventDefault();
            this.searchBooks();
        });
        this.render();
    };
    render = () => {
        const template = new SearchbarTemplate();
        this.SearchbarHTML.innerHTML = template.render();
    };
    searchBooks = async () => {
        const input = this.SearchbarHTML.querySelector('input');
        const search = input.value;
        await this.searchBooksFn(search);
        this.render();
    };
    getSearchbarHTML = () => {
        return this.SearchbarHTML;
    };
}
