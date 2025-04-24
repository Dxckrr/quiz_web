import SearchbarController from "./controller/SearchbarController";
import SearchbarView from "./view/SearchbarView";
export default class Searchbar {
    view;
    controller;
    constructor(searchBooksFn) {
        this.view = new SearchbarView(searchBooksFn);
        this.controller = new SearchbarController(this.view);
    }
    init = () => {
        this.controller.init();
    };
}
