import { MongoClient } from "mongodb";
import Obj from "mongodb";

const MongoURL = "mongodb+srv://Jeeva:Jeeva12345@cluster0.7wb6jvt.mongodb.net/?retryWrites=true&w=majority";
 async function createConnection() {
  const client = new MongoClient(MongoURL);
  await client.connect();
  console.log("MongoDB is connected successfully");
  return client;
}

export var ObjectId = Obj.ObjectId;
export const client=await createConnection()