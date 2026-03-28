let username="user123"
username="user456"

//redeclartion is controlled /not allowed
//reassignment is possible


//scoping

var age=25

let browserVers=130.5
//block
{
    let browserName="chrome" //declared inside the block
    browserVers=120.5 //locally
    console.log("The browserName is printed from inside the block"+browserName)
    console.log("The browserVersion is printed from inside the block" +browserVers)
}


console.log("The browserVersion is printed from globaldeclaration " +browserVers)

//console.log("The browserName is printed from outside the block" +browserName) //outside the block

