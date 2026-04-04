//js -->async, singlethreaded and non blocking io 


//4. callback function -higher order function

// setTimeout(() => {
//     console.log("Login to app")
// }, 2000);
// console.log("history of video")


function loginDetails(credentials){
    if(credentials=="7907668903"){
        console.log("Valid crdentials")
        history()
        recommended()
    }   
}

function history(){
    console.log("History of movies watched")
}

function recommended(){
    console.log("recommended to watch")
}

//loginDetails("7907668903")
//--------------------

//function fn(a){a()}

function watchVideo(user,onHistory,onRecommended){
    console.log("User Authentication")
    if(user=="Vidya"){
      console.log("Login successful")
      console.log("Fetch all the data from the server")
      onHistory()
      console.log("Fetch the recommded movies")
      onRecommended()
    }
}

function onHistory(){
    console.log("Histroy loaded")
}

function onRecommended(){
  console.log("Recommended movies added")
}

watchVideo("Vidya",onHistory,onRecommended)





