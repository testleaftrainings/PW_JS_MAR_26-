
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


function validateUser(user,loginInfo){  
        loginInfo(user).then((message)=>console.log(message))
        .catch((error)=>console.log(error))
}

validateUser("vidya",login)
console.log("Click on login")


async function validateUser(user, loginInfo) {
    try {
        const message = await loginInfo(user);
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

validateUser("vidya", login);
console.log("Click on login");