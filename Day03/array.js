//dynamic-->add and remove the array
let arr=[1,2,3,4,5,6] //literal way
let array=new Array("Vidya","Sai","Uday","Gautami") //object

console.log(arr[5]) //stores the data in the zero based index

console.log(arr.length)
//to add or remove elements from the array
//push,unshift -->add the element 
//pop and shift -->remove the element

arr.push(9) //will add the ele at the end of the array
console.log(arr)
arr.unshift(10)
console.log(arr) //add the ele at the first index
arr[10]=15
console.log(arr)
arr[9]=20
console.log(arr)
console.log(arr.length)

arr.shift() //remove from the first index
console.log(arr)
arr.pop() //remove the ele from the end
console.log(arr)
//remove the ele or replace the ele from the specified index
arr.splice(4,0,"Ramesh",36,45) //start index 4, remove the 5 and 6 indexed and add new ele to the same position
//splice(startindex,deletecount,replace with new data)
console.log(arr)
array.pop()
console.log(array)

//high level for loops
//forEach , for of  -->work on the values of the array irrespective of the index

let browerName=["chrome","Edge","Safari"]
browerName.forEach(bName=> {
    console.log(bName)
});

let browserVersion=[120.5,140.5,200]
for (const bversion of browserVersion) {
    console.log(bversion)
}

let numberarry=[2,3,4,5]
let num2=[2,6,4,8]
for(let i=0;i<numberarry.length;i++){ //outer loop
    //2 --> 5, 2-->6, 2-->7, 2-->8
  for(let j=0;j<num2.length;j++){ //inner loop
     console.log("Outerloop :"+numberarry[i] +"innerloop",num2[j])
  }
}
//two arrays
//comapre the two arrays
//fetch the common data


for(let i=0;i<numberarry.length;i++){ //outer loop
    //2 --> 5, 2-->6, 2-->7, 2-->8
  for(let j=0;j<num2.length;j++){ //inner loop
   
     if(numberarry[i]==num2[j]){
        console.log(numberarry[i])
     }
  }

}