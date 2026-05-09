export class Employee{
  public username!:string
   public readonly password:string
   private token!:string
   protected phnoNum!:number

   constructor(){
    this.username="Vithya"
    this.password="test@123"
    this.token="Y23FTISFKM4"
    this.phnoNum=90374829027
   }

   displayDetails(){
    //this.password=""
     console.log(`The Employee details are ${this.username} : ${this.password} :${this.token} : ${this.phnoNum}`)
   }
 
   //to provide the permission for the private variable -getter method
   public get readToken(){
    return this.token
   }
  //to provide write access -setter method
   public set writeToken(newToken:string){
    this.token=newToken
   }
   }
   const emp=new Employee()
   emp.displayDetails()
   const tk=emp.readToken //call the getter method in a property way
   console.log(tk)
   //call the setter method as property
   emp.writeToken="INDO294902GJO"
   console.log(emp.readToken)

   emp.writeToken="oedfrndf"
      console.log(emp.readToken)
