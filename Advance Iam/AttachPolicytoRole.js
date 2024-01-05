import { IAMClient, AttachRolePolicyCommand } from "@aws-sdk/client-iam"; 

const iam = IAMClient()

const role_name = "my_role"
const Policy_name = "my_policy"

async function attachRolepolicy (){
    try{
        const command = {
            RoleName: role_name , 
            PolicyArn : "waserdtfyguhij"
        }
        const data = new AttachRolePolicyCommand(command)

        const response = await iam.send(data)
        console.log("policy attached")
    }
    catch(err){
        console.log(err)
    }
}