import FilterController from "./controller/FilterController.js";
import FilterView from "./view/FilterView.js";
export default class Filter {
    view;
    controller;
    constructor(filterBy) {
        this.view = new FilterView(filterBy);
        this.controller = new FilterController(this.view);
    }
    init = () => {
        this.controller.init();
    };
    getFilterHTML = () => {
        return this.view.getFilterHTML();
    };
}
