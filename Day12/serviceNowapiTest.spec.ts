import test,{BrowserContext, expect} from '@playwright/test'

 /* endpoint
  http method
  headers -authorization, contenttype
  body
  response to validate
 */
const username="admin"
const password= "AupH4z@O+Hp5"
const credentials=`${username}:${password}` 
//admin : AupH4z@O+Hp5
 const auth=btoa(credentials)
console.log(auth)
//AMDNFK3894NFKLW
let sysId:any

 test(`Create resource with API`,async({context})=>{
  const reqApi=context.request
    const resBody=await reqApi.post(`https://dev324532.service-now.com/api/now/table/incident`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Basic ${auth}`
        },
        data:{ //body/payload
            "short_description":"Learning to integrate api with pw"
           }
    })
  const response=await resBody.json()
  const plainText=await resBody.text()
  sysId=response.result.sys_id
  console.log(sysId)
  console.log(response.result.task_effective_number)
   console.log(resBody.status())  //status code -200,400,201..
  console.log(resBody.statusText())//created,ok,nocontent
 
})

test(`Fetch all resource with API`,async({context})=>{
  const reqApi=context.request
    const resBody=await reqApi.get(`https://dev324532.service-now.com/api/now/table/incident`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Basic ${auth}`
        },params:{
            "sysparm_fields":"task_effective_number,short_description,priority,state,location",
            "sysparm_limit":"1"   
           
        }
    })
  const response=await resBody.json()
   console.log(response)
 })

test(`Update resource with API`,async({context})=>{
  const reqApi=context.request
    const resBody=await reqApi.patch(`https://dev324532.service-now.com/api/now/table/incident/${sysId}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Basic ${auth}`
        },
        data:{ //body/payload
            "description":"updating the resource",
            "location":"Chennai"
           }
    })
  const response=await resBody.json()
  console.log(resBody.status())  //status code -200,400,201..
  console.log(resBody.statusText())//created,ok,nocontent
  expect(resBody.status()).toBe(200)
})
