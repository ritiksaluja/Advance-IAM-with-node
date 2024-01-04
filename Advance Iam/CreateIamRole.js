import { IAMClient , CreateRoleCommand } from "@aws-sdk/client-iam";

const iam = new IAMClient()

const Role_Name = "My_Role"

const trust_policy = {
    "Version" : "2012-10-17" , 
    "Statement" : [
        {
            "Effect" : "Allow" , 
            "Principal" : {
                "Services" : "ec2.amazonaws.com"
            } , 
            "Action" : "sts:AssumeRole"
                }
    ]
}


async function CreateRole (){
    try{
        const command = new CreateRoleCommand(
            {
                RoleName : Role_Name , 
                AssumeRolePolicyDocument : JSON.stringify(trust_policy)

            }
        )

        const response = await iam.send(command)
        console.log("iam role created")
    }
    catch(err)
    {
        console.log(err)

    }
}

CreateRole()