import IndexView from "../view/IndexView";

export default class IndexController {
    constructor(
        private readonly view: IndexView
    ) {}

    readonly init = () => {
        console.log('IndexController initialized');
        this.view.init();
    }
}