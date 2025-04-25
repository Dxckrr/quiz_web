import SearchbarTemplate from "../template/SearchbarTemplate.js";

export default class SearchbarView {
  private readonly SearchbarHTML;

  constructor(readonly searchBooksFn: (search: string) => Promise<void>) {
    this.SearchbarHTML = document.createElement("searchbar") as HTMLElement;
    this.SearchbarHTML.classList.add("search-input");
  }

  readonly init = () => {
    console.log("SearchbarView initialized");
    this.render();
  };
  readonly render = () => {
    const template = new SearchbarTemplate();
    this.SearchbarHTML.innerHTML = template.render();
    this.handleSearch();
  };

  readonly handleSearch = () => {
    const button = this.SearchbarHTML.querySelector(
      "#search-button"
    ) as HTMLButtonElement;
    button.addEventListener("click", async (e) => {
      e.preventDefault();
      console.log("button clicked");
      await this.searchBooks();
    });
  };

  readonly searchBooks = async () => {
    console.log("searchBooks called");
    const input = this.SearchbarHTML.querySelector(
      ".search-input"
    ) as HTMLInputElement;
    const search = input.value;

    await this.searchBooksFn(search);
    this.render();
  };

  readonly getSearchbarHTML = (): HTMLElement => {
    return this.SearchbarHTML;
  };
}
