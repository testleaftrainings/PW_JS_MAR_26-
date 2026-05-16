import axios from "axios";

const endpoint="https://vbharathir19.atlassian.net/rest/api/2/issue"
const userId="v.bharathir19@gmail.com"
const apiKey="ATATT3xFfGF0omUCPTBenLbpBS05IUC3CkqDIvChA8-RaUVX3C_tB1jjNvbd9DPTIvGgtAvIgQFC74HmoSzq0t8ZxVmuJgEk6xXBuLlnJ9R8r2_ttfeG3Px3a6nVQ1F0kwbWu67GqsT3lLPDkSYO6HKFo033LOsp8e5tQ7fsK4-cTP8SxH4CIS8=B337A893"
const project="SCRUM"



export async function createJiraIssue(summary:string,desc:string){

    const issueBody={
        "fields":{
            "project":{
                "key":project
            },
            "issuetype":{
                "name":"Bug"
            },
            "summary":summary,
            "description": desc
        }
    }
    const resp= await axios.post(endpoint,issueBody,{
        headers:{
            "Content-Type":"application/json"
        },auth:{
            username:userId,
            password:apiKey
        }
     }) 


   console.log(resp.status)
   //JSON.stringify(resp)

}

//await createJiraIssue("Integrating Jira","Using axios")