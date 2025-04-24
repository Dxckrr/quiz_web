import IndexController from "./controller/IndexController.js";
import IndexView from "./view/IndexView.js";
export default class Index {
    indexView;
    IndexController;
    constructor() {
        this.indexView = new IndexView();
        this.IndexController = new IndexController(this.indexView);
    }
    init = () => {
        this.IndexController.init();
    };
}
