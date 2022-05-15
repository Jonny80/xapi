const fetch = require("node-fetch")
const authmanager = require("./Authmanager").default.instance;

export default class Networkmanager {

    static get instance() {
        if (!Networkmanager._instance) {
            Networkmanager._instance = new Networkmanager();
        }
        return Networkmanager._instance;
    }

    async login(mail,password) {
       let res  =  await fetch("http://localhost:3001/login",{
           method:"POST",
           body:JSON.stringify({
               password:password,
               email:mail
           }),
           headers: { 'Content-Type': 'application/json' }

       }).catch(e=>{
           console.log(e);
           return false;
       })
        if (res === false) return false;
        return res.status < 300;
    }

    async  addUser(name,password,email) {
        let res = await fetch("http://localhost:3001/signup",{
            method:"POST",
            body:JSON.stringify({
                name:name,
                password:password,
                email:email
            }),
            headers: { 'Content-Type': 'application/json' }

        }).catch(e=>{
            console.log(e);
            return false;
        })
        if (res === false) return false;
        return res.status < 300;

    }

    /**
     * @param verb {String}
     * @param object {String}
     */
    async sendStatement(verb,object) {
        const actor = authmanager.user;
        try {
            let request = await fetch(`http://localhost:3001/statements/${actor}/object/${object}/verb/${verb}`);
            if (request.status > 300) console.log("Sending Statement failed");
            else console.log("sending sucessfully");
        }catch (e) {
            console.log(e);
        }
    }
}