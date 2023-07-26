import { ObjectId } from "mongodb";
import { client } from "../db.js";


 export async function getAllCars(){
   const result=await client
        .db("cars")
        .collection("cars")
        .find({})
        .toArray()
      //   console.log("result",result)
        return result
 }

 export function getCarsById(id){
    return client
    .db("cars")
    .collection("cars")
    .findOne({_id: new ObjectId(id)})
    
 }  

 export function addCarsData(data){
    return client
    .db("cars")
    .collection("cars")
    .insertOne({data})
 }

 export function updateCarsData(id, updateCarsData){
    return client
    .db("cars")
    .collection("cars")
    .findOneAndUpdate({_id: new ObjectId(id)},{$set:updateCarsData})
 }

 export function deleteCarsData(id){
    return client
    .db("cars")
    .collection("cars")
    .deleteOne({_id: new ObjectId(id)})
 }