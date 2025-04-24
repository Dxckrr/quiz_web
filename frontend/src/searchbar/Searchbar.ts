import SearchbarController from "./controller/SearchbarController";
import SearchbarView from "./view/SearchbarView"

export default class Searchbar {
    private readonly view: SearchbarView;
    private readonly controller: SearchbarController;

    constructor(searchBooksFn: (search: string) => Promise<void>){
        this.view = new SearchbarView(searchBooksFn);
        this.controller = new SearchbarController(this.view);
    }

    readonly init = () => {
        this.controller.init();
    }

    readonly getSearchbarHTML = () => {
        return this.view.getSearchbarHTML();
    }
}