import { IAMClient ,TagUserCommand } from "@aws-sdk/client-iam";

const client = new IAMClient()

const user_Name = "ritik"

const tags = [ {'key': 'Department' , 'Value' : 'HR'} , {'key': 'Department' , 'Value' : 'Operation'}]

async function addTagUser (){
    try{
        const command = new TagUserCommand({
            UserName : user_Name , 
            Tags : tags
        })

        await client.send(command)
        console.log("tag Created")
    }
    catch(err){
        console.log(err)
    }
}

addTagUser()