export default class Authmanager {
    static get instance() {
        if (!Authmanager._instance) {
            Authmanager._instance = new Authmanager();
        }
        return Authmanager._instance;
    }

    constructor() {
        this.user = "John Smith";
    }
}