import { IAMClient ,  ListUserTagsCommand,  ListUsersCommand } from "@aws-sdk/client-iam";

const client = new IAMClient()

async function listUserWithTag (){
try{
    const ListUserCommand = new ListUsersCommand({})

    const listUserResponse = await client.send(ListUserCommand)

    for(user of listUserResponse.users){
        const user_Name = user.UserName

        const ListUsertTagCommands = new ListUserTagsCommand({
                UserName : user_Name
        })

        const ListUserTagResponse = await client.send(ListUsertTagCommands)
        const tags = ListUserTagResponse.Tags
        console.log(tags)
    }
}
catch(err){
    console.log(err)
}
}

listUserWithTag()