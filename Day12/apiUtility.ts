import { APIRequestContext } from "@playwright/test";
import {faker} from '@faker-js/faker'



const grType="password"
const key="*****************************************"
const secret="*******************************************"
const uname="gauthami.vn@testleaf.com"
const pwd="Testleaf@2026"
// let accToken:any
// let instUrl:any
// let tokenType:any
let Id:any

  

export async function generateToken(request:APIRequestContext){

     const response=await request.post(`https://login.salesforce.com/services/oauth2/token`,{
        headers:{
            "Content-Type":"application/x-www-form-urlencoded",
        },
        form:{
           "grant_type":grType,
           "client_id":key,
           "client_secret":secret,
           "username":uname,
           "password":pwd
        }
        })

        const res=await response.json()          
        return {
        accToken:res.access_token,
        instUrl:res.instance_url,
        tokenType:res.token_type
        }        
    }
export async function createResource(request:APIRequestContext){
    const res=await request.post(`${(await generateToken(request)).instUrl}/services/data/v66.0/sobjects/Lead`,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`${(await generateToken(request)).tokenType} ${(await generateToken(request)).accToken}`
        },
        data:{
            "lastname":faker.person.lastName(),
             "company":faker.company.buzzNoun()
        }
  })
    const responseBody=await res.json()
    console.log(responseBody)
    Id=responseBody.id
    }

    
export async function FetchResource(request:APIRequestContext){
    const res=await request.get(`${(await generateToken(request)).instUrl}/services/data/v66.0/sobjects/Lead/${Id}`,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`${(await generateToken(request)).tokenType} ${(await generateToken(request)).accToken}`
        },
         })
    const responseBody=await res.json()
   return responseBody.LastName
    
    }


    
    
export async function updateResource(request:APIRequestContext){
    const res=await request.patch(`${(await generateToken(request)).instUrl}/services/data/v66.0/sobjects/Lead/${Id}`,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`${(await generateToken(request)).tokenType} ${(await generateToken(request)).accToken}`
        },
        data:{
            "firstname":faker.person.firstName()
                }
         })
    const responseBody=await res.json()
   return responseBody
    
    }