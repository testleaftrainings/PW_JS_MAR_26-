//implicit inference 
let userName="Sweta"
//username=123 reassigning with different type of data is not possible

let firstName:string
firstName="Aswin123"
firstName="bharat567"
//firstName=123

//explicit inference / type annotation
let browserVer:number
browserVer=120.78 

let browserActive:boolean=true

let users:string[]
users=["123","Vidya","Sai"]
console.log(users)
//api testing - ok , 404 
let response:any
response="Ok Created"
response=404
response=false
console.log(response)

//union type -->either or

let url:string|null
//Promise<string|null>

let responseCode:string|number|boolean
responseCode="Ok"
console.log(responseCode)
responseCode=201

//intersection-->both &
//let email:string&number  //never
// email="vid12@gmail.com"
// email=79890384759