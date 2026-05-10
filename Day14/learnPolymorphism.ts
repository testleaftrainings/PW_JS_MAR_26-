class ElementAction{
   
    //same method name with in a sameclass with different arguments
    //  public click(element:string):void    

    //  public click():void

    //  public click(element:string,timeout:number):void  

     public click(element?:string,timeout?:number):void{
        if(timeout){
            console.log("clicked the element forcefully")
        }

        console.log("Element clicked normally"+element)

     }
    
}


const obj=new ElementAction()
//overloading
obj.click("crmLink")
obj.click("createlead",2000)
obj.click()

