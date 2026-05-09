import { userInfo } from "os"

class Login{

    // constructor(){
    //     console.log("default constructor")
    // }

     username!:string
     browser:string
     page:string
    //parametrized constructor
    constructor(page:string,browserName:string){
        this.browser=browserName
        this.page=page
          console.log(`load the ${this.page} fixture`)
    }

    loadBrowser(browserName:string,user:string){
        this.username=user
        console.log(`Launch ${browserName} browser with ${this.username}`)
     }
}

const bName=new Login("pageref","browserRef")
bName.loadBrowser("chrome","admin123")
bName.loadBrowser("firefox","test123")




