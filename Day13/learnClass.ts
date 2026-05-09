export class LoginPage{
    //global info -belonging to the class
    //property /information/data 
    username:string="admin123"
    password:string="test@123"

    //action or method
  //this is a keyword refer to the current class method or property
    loadApp(appName:string){
        //LoginPage.username
        console.log(`Using the ${this.username} and ${this.password} to load ${appName} app`)
    }

     gotoUrl(appName:string){
        this.loadApp(appName) //LoginPage.loadApp
     }

}

//to use the tempalte create an object /refernce 
//const objName=new classname()

const salesForce=new LoginPage()
salesForce.gotoUrl("Salesforce")

const lfLogin=new LoginPage()
lfLogin.gotoUrl("Leaftaps")