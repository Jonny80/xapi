export default class Authmanager {

    static _instance = null;

    static getInstance() {
        if (!Authmanager._instance) {
            Authmanager._instance = new Authmanager();
        }
        return Authmanager._instance;
    }

    constructor() {
        console.log("Authmanager initialized")
        this.user = localStorage.getItem("user") || "John Smith";
        this.userID = localStorage.getItem("userId") || null;
    }

    setUserId(id)  {
        localStorage.setItem("userId",id);
        this.userID = id;
    }
    setUserName(name) {
        localStorage.setItem("user",name);
        this.user = name;
    }
}