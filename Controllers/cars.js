import { ObjectId } from "mongodb";
import { client } from "../db.js";


 export function getAllCars(req){
   return client
        .db("cars")
        .collection("cars")
        .find(req.query)
        .toArray()
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