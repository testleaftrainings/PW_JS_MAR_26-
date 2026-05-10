import {test} from '../utility/customFixture'
import { Login } from "../pages/LF_LoginPage";
import { parse } from "csv-parse/sync";
import fs from 'fs'


let loginData:any[]
loginData=parse(fs.readFileSync("tests/Day14/POM/data/loginCredentials.csv"),
{
     columns:true,
    skip_empty_lines:true,
})

test(`Login with LeafTaps`,async({lfLogin})=>{      
    await lfLogin.verifyTitle("Leaftaps")
     
})