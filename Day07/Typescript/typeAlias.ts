//type alias -custom type 

//real time -->role based -->admin, user, general emp
//credentials
//type variableName:type of data
type user=number|string

let email:user
email="vid19@gmail.com"
email=9076568979

type Admin={
    username:string|number,
    password:string
}

type Employee={
    firstname:string,
    phno?:number
    isActive:boolean
}

let empDetails:Admin&Employee
empDetails={
  username:"Vidya",
  password:"vis123",
  firstname:"Vidya",
  phno:9875589000,
  isActive:true
}

console.log(empDetails)


let userDetails:Admin&Employee
userDetails={
    username:9087655446,
    password:"123&ert",
    firstname:"Ramesh",
    isActive:true
}
//dot notation - object.property
console.log(userDetails.phno)