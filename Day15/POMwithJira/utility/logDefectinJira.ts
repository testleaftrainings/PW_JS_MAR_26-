import { TestInfo } from "@playwright/test";
import { createJiraIssue } from "./jiraintegration";

export async function logDefect(testInfo:TestInfo){  
    if(testInfo.status==="failed"|| testInfo.status==="interrupted"|| testInfo.status==="timedOut" && testInfo.repeatEachIndex===testInfo.project.repeatEach){
     const summary =`Test is ${testInfo.status}`
     const desc=`The test ${testInfo.status} due to ${testInfo.error?.message}`
     const issukey=  await createJiraIssue(summary,desc)
     return issukey
     }else{
        console.log(testInfo.status)
     }     
}