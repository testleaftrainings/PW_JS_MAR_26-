
function login(credentials){   
   return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(credentials==="vidya"){
               resolve("Valid data")
                 }else{
                  reject("Invalid data")
                 }        
        }, 100);
    })   
 }


function validateUser(user,callback){  
        callback(user).then((message)=>console.log(message))
        .catch((errorMsg)=>console.log(errorMsg))
}

validateUser("vidya",login)
//console.log("Click on login")

validateUser("Aswin",login)
//console.log("Click on login")

//fulfill--resolving
//pending
//reject-->failure



// async function validateUser(user, loginInfo) {
//     try {
//         const message = await loginInfo(user);
//         console.log(message);
//     } catch (error) {
//         console.log(error);
//     }
// }

// validateUser("vidya", login);
// console.log("Click on login");