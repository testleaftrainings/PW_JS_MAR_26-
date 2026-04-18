"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//optional -->?
//defaultparamter -->default value timeout:number=3000
// `${}` ->template literal
function login(username, password, timeout = 3000, isActive) {
    return `the employee details are ${username},${password},${timeout},${isActive}`;
}
console.log(login("Jayaraj", "Jay@123"));
console.log(login("Ganesh", 123345, 2000));
console.log(login("Aswin", 14545, 2000, true));
//# sourceMappingURL=functionType.js.map