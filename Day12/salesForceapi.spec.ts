import test from '@playwright/test'

const grType="password"
const key="3MVG9rZjd7MXFdLhTFd7jYNtTiu5DzDqdNCte5DvFnv7tbIspjQ9CGPizYGUq7h6T69VSmfqxT9yY2NS7tz84"
const secret="09FE1EF4BDD93B17821073243A441F8A780A639C21D925B575C1112A3F5E0DBE"
const uname="gauthami.vn@testleaf.com"
const pwd="Testleaf@2026"
let accToken:any
let instUrl:any
let tokenType:any
let Id:any
test(`Generate the token`,async({request})=>{
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
        console.log(res)
        accToken=res.access_token
        instUrl=res.instance_url
        tokenType=res.token_type
        console.log(`${accToken},${tokenType},${instUrl}`)
})

test(`Create resource`,async({request})=>{
  const res=await request.post(`${instUrl}/services/data/v66.0/sobjects/Lead`,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`${tokenType} ${accToken}`
        },
        data:{
            "lastname":"bharathi",
             "company":"Testleaf"
        }
  })
  const responseBody=await res.json()
  Id=responseBody.id
  console.log()

})

test(`Fetch resource`,async({request})=>{
  const res=await request.get(`${instUrl}/services/data/v66.0/sobjects/Lead/${Id}`,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`${tokenType} ${accToken}`
        },
      })
  const responseBody=await res.json()
  console.log(responseBody)

})