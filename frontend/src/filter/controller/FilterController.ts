import FilterView from "../view/FilterView.js";

export default class FilterController {
    
    constructor(private readonly view: FilterView) {}

    readonly init = () => {
        console.log('SearchbarController initialized');
        this.view.init();
    }
}