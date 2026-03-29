let age=18

//range complex logic
if(age>=18){
    console.log("Rights to vote")
}else{
    console.log("No rights to vote")
}

//grading-->>90 ->first
//switch cas -->conditional
//jpeg
//let fileType


function uploadFile(fileType){
switch(fileType) { //switch(true)
  case "Jpeg":
    console.log("upload the jpeg file")
    break //stops the execution
 case "doc":
    console.log("upload the doc file")
    break
 default:
    console.log("Unsupported file")
}
}

uploadFile("Jpeg")
uploadFile("doc")
uploadFile("PNG")