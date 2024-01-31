import { IAMClient, UntagUserCommand } from "@aws-sdk/client-iam";

const client = new IAMClient()

const user_Name = "ritik"

const tags_keys = ["Department"]

async function removeTag (){
    try{
        const command = new UntagUserCommand({
            UserName : user_Name , 
            TagKeys :tags_keys
        })

        const response = await client.send(command)

        console.log(response)
    }

    catch(err){
        console.log(err)
    }
}

removeTag()