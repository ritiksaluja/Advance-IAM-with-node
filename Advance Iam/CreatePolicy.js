import { IAMClient , CreatePolicyCommand } from "@aws-sdk/client-iam";

const iam = new IAMClient()

const Policy_name = "myPolicy"


const policy_document = {
    "Version" : "2012-10-17" , 
    "Statement" : [
        {
            "Effect" : "Allow" , 
            "Action" : "s3:GetObkect"  , 
            "Resource":"arn:aws:s3:::ritik-saluja-12/*"

                }
    ]
}

async function createiampolicy (){

try{
    const command = new CreatePolicyCommand({
        PolicyName : Policy_name , 
        PolicyDocument : JSON.stringify(policy_document)
    })

    const response = await iam.send(command)
    console.log("policy created")
}
catch(err){
console.log(err)
}
}

createiampolicy()
