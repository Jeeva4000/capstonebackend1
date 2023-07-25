import { ObjectId } from "mongodb";
import { client } from "../db.js";


 export function getAllCars(req){
   return client
        .db("car")
        .collection("car")
        .find(req.query)
        .toArray()
 }

 export function getCarsById(id){
    return client
    .db("car")
    .collection("car")
    .findOne({_id: new ObjectId(id)})
    
 }  

 export function addCarsData(data){
    return client
    .db("car")
    .collection("car")
    .insertOne({data})
 }

 export function updateCarsData(id, updateCarsData){
    return client
    .db("car")
    .collection("car")
    .findOneAndUpdate({_id: new ObjectId(id)},{$set:updateCarsData})
 }

 export function deleteCarsData(id){
    return client
    .db("car")
    .collection("car")
    .deleteOne({_id: new ObjectId(id)})
 }