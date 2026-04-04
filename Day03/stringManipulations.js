//length
//charAt()
//indexof()
//lastindexof()


//split -->divide the string differnt words -->array of data
let userName="Vidya"
let lenOfstring=userName.length
let rev=""
for(let i=lenOfstring-1;i>=0;i--){
   rev=rev+userName.charAt(i)
}
console.log(rev)

let user="Testleaf"
//delimiter -->where to split the string
let newString=user.split("e")
console.log(newString)
console.log(user.split(""))
let reversedString=user.split("").reverse().join("_")
console.log(reversedString)
//fealtset
let user1="Rupesh Kumar"

console.log(user1.split(" "))

//substring --extract the sequence of character with respect to index value provided
let subString=user1.substring(3,9)
console.log(subString)

//slice - it accepts negative index

let slicedValue=user1.slice(3,9)
console.log(slicedValue)

let negIndexedValue=user1.slice(-3,-1)

console.log(negIndexedValue)


//replace 
let pdtPrice="$Price2599#"
console.log(pdtPrice+200)
console.log(pdtPrice.replace("$",""))
//regExp
console.log(pdtPrice.replaceAll(/[^a-zA-Z]/g,""))
//grep -->global regular express ^-->except /not 
let price=pdtPrice.replaceAll(/[^0-9]/g,"")
console.log(price)
//convert to number
let numPrice=parseInt(price)
console.log(typeof numPrice)
console.log(numPrice+20)


