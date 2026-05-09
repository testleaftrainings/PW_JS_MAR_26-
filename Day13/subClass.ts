import { de } from "@faker-js/faker"
import { LoginPage } from "./learnClass"

export class HomePage extends LoginPage{
   
    serachPdt()
    {
        console.log("Search pdt")
    }

    makePayment(){
        console.log("do transaction")
    }
}

const hp=new HomePage()

 hp.gotoUrl("http://ww.google.com") 
 hp.makePayment()


 export class ProductPage extends HomePage{

  selectProduct()
  {
    console.log("Select the product")
  }

  addtoCart(){
    console.log("add to cart")
  }

 }

 const pPage=new ProductPage()
 pPage.gotoUrl("amazon")
 pPage.serachPdt()
 pPage.selectProduct()
 pPage.addtoCart()
 pPage.makePayment()


 export class debitPayment extends HomePage{

 }

 const dPay=new debitPayment()
