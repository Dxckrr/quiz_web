export default class IndexController {
    view;
    constructor(view) {
        this.view = view;
    }
    init = () => {
        console.log('IndexController initialized');
        this.view.init();
    };
}
