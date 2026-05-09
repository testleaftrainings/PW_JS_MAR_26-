import {Page} from '@playwright/test'
import { Employee } from './learnAccessmod'

export class LaunchApplication{
   readonly lppage:Page
   
  constructor(page:any){
    this.lppage=page
  } 
 async loadUrl(){
   await this.lppage.goto("http://leaftaps.com/opentaps/control/main")
    //  const emp=new Employee()
    //  emp.writeToken="fje533dsfd"
    //  console.log(emp.readToken)
  }

  }