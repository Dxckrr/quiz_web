import SearchbarTemplate from "../template/SearchbarTemplate.js";
export default class SearchbarView {
    searchBooksFn;
    SearchbarHTML;
    constructor(searchBooksFn) {
        this.searchBooksFn = searchBooksFn;
        this.SearchbarHTML = document.createElement("searchbar");
        this.SearchbarHTML.classList.add("search-input");
    }
    init = () => {
        console.log("SearchbarView initialized");
        this.render();
    };
    render = () => {
        const template = new SearchbarTemplate();
        this.SearchbarHTML.innerHTML = template.render();
        this.handleSearch();
    };
    handleSearch = () => {
        const button = this.SearchbarHTML.querySelector("#search-button");
        button.addEventListener("click", async (e) => {
            e.preventDefault();
            console.log("button clicked");
            await this.searchBooks();
        });
    };
    searchBooks = async () => {
        console.log("searchBooks called");
        const input = this.SearchbarHTML.querySelector(".search-input");
        const search = input.value;
        await this.searchBooksFn(search);
        this.render();
    };
    getSearchbarHTML = () => {
        return this.SearchbarHTML;
    };
}
