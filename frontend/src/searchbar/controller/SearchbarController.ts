import SearchbarView from "../view/SearchbarView.js";

export default class SearchbarController {
    
    constructor(private readonly view: SearchbarView) {}

    readonly init = () => {
        console.log('SearchbarController initialized');
        this.view.init();
    }
}