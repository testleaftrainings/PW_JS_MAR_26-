"use strict";
class Login {
    // constructor(){
    //     console.log("default constructor")
    // }
    
    constructor(page) {
        console.log(`load the ${page} fixture`);
    }

    
    loadBrowser(browserName) {
        console.log(`Launch ${browserName} browser`);
    }
}
const bName = new Login("page from browserContext");
bName.loadBrowser("chrome");
bName.loadBrowser("firefox");
