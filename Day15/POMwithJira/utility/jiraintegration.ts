import axios from "axios";
import fs from 'fs'
import path from 'path'
import FormData from "form-data";

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

   return resp.data.key;

}



export function getAllFiles(dir: string, fileList: string[] = []): string[] {
    try {
        const stats = fs.statSync(dir);
        if (!stats.isDirectory()) {
            console.error(`Path is not a directory: ${dir}`);
            return fileList;
        }

        const files = fs.readdirSync(dir);
        files.forEach((file) => {
            const filePath = path.join(dir, file);
            const stats = fs.statSync(filePath);
            if (stats.isFile()) {
                fileList.push(filePath);
            } else if (stats.isDirectory()) {
                getAllFiles(filePath, fileList);
            }
        });
    } catch (err) {
        console.error(`Error reading directory ${dir}:`, err);
    }
    return fileList;
}

/**
 * Uploads a batch of files as attachments to a Jira issue.
 * @param issueKey The key of the Jira issue to update.
 * @param files The files to upload.
 */
export async function uploadBatch(issueKey: string, files: string[]) {
    const formData = new FormData();
    files.forEach((filePath) => {
        console.log(`Appending file: ${filePath}`);
        formData.append('file', fs.createReadStream(filePath), { filename: path.basename(filePath) });
    });

    try {
        console.log(`Uploading batch to: ${endpoint}${issueKey}/attachments`);
        // Send a POST request to upload the attachments
        const response = await axios.post(`${endpoint}${issueKey}/attachments`, formData, {
            auth: {
                username: userId,
                password: apiKey
            },
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-Atlassian-Token': 'no-check'
            },
            timeout: 120000 // Set timeout to 120 seconds
        });

        console.log('Batch uploaded successfully');
        console.log(response.data);
    } catch (error) {
        if (error) {
            console.error('Batch upload failed:', error);
        } else {
            console.error('Batch upload failed:', error);
        }
    }
}

/**
 * Updates a Jira issue by uploading attachments from the specified folder.
 * @param issueKey The key of the Jira issue to update.
 * @param folderPath The path to the folder containing files to attach.
 */
export async function updateJiraIssue(issueKey: string, folderPath: string) {
    console.log(`Current working directory: ${process.cwd()}`);
    const absoluteFolderPath = path.resolve(folderPath); // Resolve the absolute path of the folder

    console.log(`Absolute path of folderPath: ${absoluteFolderPath}`);
    
    // Get all files in the specified folder and subdirectories
    const files =getAllFiles(absoluteFolderPath);
    console.log(`Files to be uploaded: ${files}`);
    // Upload files in batches
    const BATCH_SIZE=5
    for (let i = 0; i < files.length; i += BATCH_SIZE) {
        const batch = files.slice(i, i + BATCH_SIZE);
        console.log(batch)
        await uploadBatch(issueKey, batch);
    }
}

//await createJiraIssue("Integrating Jira","Using axios")