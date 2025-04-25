export default class SearchbarController {
    view;
    constructor(view) {
        this.view = view;
    }
    init = () => {
        console.log('SearchbarController initialized');
        this.view.init();
    };
}
