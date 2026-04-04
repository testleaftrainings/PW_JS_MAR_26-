//1.named function -only named function has the behaviour of hoisting
function loginDetails(){
    console.log("Login verficication")
}
loginDetails()

//2.function Expression -
 //anonymouns function -->function without name and assignt he function to the variable
let sum= function add(a,b){
    
    return a+b
}
console.log(sum(6,7))

//3. arrow function 
 //anonymus arrow function
 //()=>logic --> 
let math=(a,b)=>a+b
console.log(math(3,4))

let anonymous =function (){
    console.log("Calling anonymous function")
}

anonymous()

  