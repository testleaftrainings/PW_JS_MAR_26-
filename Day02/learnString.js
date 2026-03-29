//literal declaration
let userName="Test leaf"
let firstName='Aswin'
let user ="Testleaf"
//back tick `
let lastName=`Nachiappan`

//object declaration 
let companyName=new String("Testleaf")
let compName=new String("Testleaf")


// console.log(companyName===compName)
// console.log(userName===user)

// console.log(userName===companyName)


//find the number of characters in the string
let lenOfstring=userName.length
console.log(lenOfstring)
//t,e,s,t, ,l,e,a,f 
//0 1 2 3 4 5 6 7 8
 //index starts with zero -->

//to fetch the particular character form the string
// console.log(userName.charAt(4))

// console.log(userName.indexOf('e'))//first appearing index
// console.log(userName.lastIndexOf('e'))

// for(let i=0;i<lenOfstring;i++){
//     console.log(userName.charAt(i))
// }

//vidya --> aydiv
for(let i=lenOfstring-1;i>=0;i--){
    console.log(userName.charAt(i))
}

let rev=""
for(let i=lenOfstring-1;i>=0;i--){
   rev=rev+userName.charAt(i)
}
console.log(rev)

//character occurence
//Testleaf -->count the number of e in the string 
//output -->2

//declare the variable for string
//declare variable as count =0
//for -->to get into the character start from index range to the end of the string
//if -->find the match 
//increment the count
//print the count

