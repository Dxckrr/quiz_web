export default class FilterController {
    view;
    constructor(view) {
        this.view = view;
    }
    init = () => {
        console.log('SearchbarController initialized');
        this.view.init();
    };
}
