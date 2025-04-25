import FilterController from "./controller/FilterController.js";
import FilterView from "./view/FilterView.js";

export default class Filter {
    private readonly view: FilterView;
    private readonly controller: FilterController;

    constructor(filterBy: (keywords: string[]) => Promise<void>){
        this.view = new FilterView(filterBy);
        this.controller = new FilterController(this.view);
    }

    readonly init = () => {
        this.controller.init();
    }

    readonly getFilterHTML = () => {
        return this.view.getFilterHTML();
    }
}