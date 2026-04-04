
function firstFn(callback){
    setTimeout(() => {
        console.log("calling first fn")
    }, 3000);
    callback()
}
function secondFn(callback){
    setTimeout(() => {
        console.log("From second function")
    }, 3000);
    callback()
}
function thridFn(){
    setTimeout(() => {
        console.log("From third function")
    }, 3000);
   
}
//pyramid -->callback hell -->Promise
firstFn(function () {
    secondFn(function () {
        thridFn();
    });
});