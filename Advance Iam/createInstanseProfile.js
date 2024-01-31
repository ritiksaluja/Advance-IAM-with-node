import { IAMClient, CreateInstanceProfileCommand } from "@aws-sdk/client-iam";

const client = new IAMClient();

const input = {
    "InstanceProfileName": "Webserver"
  };

async function createInstanceProfile() {
  try {
    const command = new CreateInstanceProfileCommand(
      input
    );

    const response = await client.send(command);
    console.log(response, "profile created");
  } catch (err) {
    console.log(err);
  }
}

createInstanceProfile();
