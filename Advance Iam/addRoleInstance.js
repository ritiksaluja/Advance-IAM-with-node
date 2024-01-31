import { IAMClient , AddRoleToInstanceProfileCommand } from "@aws-sdk/client-iam";

const client = new IAMClient()

const instance_profile_name = "myjs"

const role_name = "myjsrule"

async function AddRoleToInstanceProfile (){
    try{
        const command = new AddRoleToInstanceProfileCommand({
            InstanceProfileName : instance_profile_name , 
            RoleName : role_name
        })

        const response = await client.send(command)
        console.log(response , "role Attache")
    }

    catch (err){
        console.log(err)
    }
}

AddRoleToInstanceProfile()