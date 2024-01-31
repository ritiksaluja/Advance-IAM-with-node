import { IAMClient , CreatePolicyCommand } from "@aws-sdk/client-iam";

const date = new Date()

const dateString = date.toISOString().split('T')[0];

const startTime = `${dateString}:T01:00:0Z`

const endTime =  `${dateString}:T03:00:0Z`

const iam = new IAMClient()



const policy_document = {
    "Version" : "2012-10-17" , 
    "Statement" : [
        {
            "Effect" : "Allow" , 
            "Action" : "s3:GetObkect"  , 
            "Resource":"arn:aws:s3:::ritik-saluja-12/*" , 
            "Condition" : {
                "DateGreaterthan" : {"aws:CurrentTime" : startTime} , 

                "DateLessthan" : {"aws:CurrentTime" : endTime}
            }

                }
    ]
}


async function createiampolicy (){

    try{
        const command = new CreatePolicyCommand({
            PolicyName : "newPolicy" , 
            PolicyDocument : JSON.stringify(policy_document)
        })
    
        const response = await iam.send(command)
        console.log("policy created" , response)
    }
    catch(err){
    console.log(err)
    }
    }
    
    createiampolicy()
    
