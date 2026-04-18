"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//implicit inference 
let userName = "Sweta";
//username=123 reassigning with different type of data is not possible
let firstName;
firstName = "Aswin123";
firstName = "bharat567";
//firstName=123
//explicit inference / type annotation
let browserVer;
browserVer = 120.78;
let browserActive = true;
let users;
users = ["123", "Vidya", "Sai"];
console.log(users);
//api testing - ok , 404 
let response;
response = "Ok Created";
response = 404;
response = false;
console.log(response);
//union type -->either or
let url;
//Promise<string|null>
let responseCode;
responseCode = "Ok";
console.log(responseCode);
responseCode = 201;
//intersection-->both &
//let email:string&number  //never
// email="vid12@gmail.com"
// email=79890384759
//# sourceMappingURL=learndatatypes.js.map