import SearchbarController from "./controller/SearchbarController.js";
import SearchbarView from "./view/SearchbarView.js";
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
    getSearchbarHTML = () => {
        return this.view.getSearchbarHTML();
    };
}
