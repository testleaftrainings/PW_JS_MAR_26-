//Step :1 npm install ajv
//define the schema to be validated
import { test, expect, chromium } from '@playwright/test';
import Ajv from 'ajv';

const username="admin"
const password= "AupH4z@O+Hp5"
const credentials=`${username}:${password}` 
//admin : AupH4z@O+Hp5
 const auth=btoa(credentials)
console.log(auth)
//AMDNFK3894NFKLW

// 1. Initialize AJV
const ajv = new Ajv({allErrors:true }); // 'allErrors: true' reports all mismatches, not just the first one

// 2. Define your expected API response schema 
//note: The schema can kept in utils folder as incident.schema.json and read into the file.spec.ts
const incidentSchema = {
  type: "object",
  properties: {
    result: {
      type: "object",
      properties: {
        sys_id: { type: "string" },
        task_effective_number: { type: "string" },
        short_description: { type: "string" }
      },
      required: ["sys_id", "task_effective_number"] // These fields MUST exist
    }
  },
  required: ["result"]
};

test(`Create resource with API and validate schema`, async ({ context }) => {
  const reqApi = context.request;
  const resBody = await reqApi.post(`https://dev324532.service-now.com/api/now/table/incident`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Basic ${auth}`
    },
    data: { 
      "short_description": "Learning to integrate api with pw"
    }
  });

  // Ensure the request was successful before checking the schema
  expect(resBody.status()).toBe(201); 

  const response = await resBody.json();

  // 3. Compile and validate the response against the schema
  const validate = ajv.compile(incidentSchema);
  const valid = validate(response);

  // 4. Assert that the schema is valid. If not, print the errors.
  if (!valid) {
    console.error("Schema Validation Errors:", ajv.errorsText(validate.errors));
  }
    expect(valid).toBe(true);
  // Your existing logic
  const sysId = response.result.sys_id;
  console.log(`Created SysID: ${sysId}`);
});


//When Playwright runs your test, AJV evaluates the API response layer by layer:
// Is the response an Object? (Yes)
// Does it contain the key result? (Yes)
// Is result its own nested Object? (Yes)
// Does result contain both sys_id and task_effective_number? (Yes)
// Are those fields formatted as strings? (Yes $\rightarrow$ Test Passes)



