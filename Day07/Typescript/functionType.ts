

//optional -->?
//defaultparamter -->default value timeout:number=3000
// `${}` ->template literal
function login(username:string,password:number|string,timeout:number=3000,isActive?:boolean){
  return `the employee details are ${username},${password},${timeout},${isActive}`
}


console.log(login("Jayaraj","Jay@123"))
console.log(login("Ganesh",123345,2000))
console.log(login("Aswin",14545,2000,true))