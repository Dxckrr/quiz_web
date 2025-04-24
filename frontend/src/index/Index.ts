import IndexController from "./controller/IndexController.js";
import IndexView from "./view/IndexView.js";

export default class Index {
    private readonly indexView: IndexView;
    private readonly IndexController: IndexController;

    constructor() {
        this.indexView = new IndexView();
        this.IndexController = new IndexController(this.indexView);
    }

    readonly init = () => {
        this.IndexController.init();
    }
}