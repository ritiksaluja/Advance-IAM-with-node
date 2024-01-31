import { EC2Client ,RunInstancesCommand } from "@aws-sdk/client-ec2";

const client = EC2Client()

const instance_profile_name = "myjs"

const params = {
    ImageId : 'ami-0d0b75c8c47ed0edf' , 
    InstanceType : 't3.micro' , 
    MinCount : 1 , 
    MaxCount : 1 ,
    IamInstanceProfile: {
        Name : instance_profile_name
    }
}

async function launchInstance (){
    try{
        const command = new RunInstancesCommand(params)
        const response = await client.send(command)
        console.log("launched" , response)
    }
    catch(err){
        console.log(err)
    }
}

launchInstance()