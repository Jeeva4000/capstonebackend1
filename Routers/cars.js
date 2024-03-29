import express from "express";
import Jwt from "jsonwebtoken";
import { addCarsData, deleteCarsData, getAllCars, getCarsById, updateCarsData } from "../Controllers/cars.js";

const router = express.Router();

router.get("/all", async (req, res) => {
    try {
        // console.log(req.query)
        const cars = await getAllCars();
        // console.log("cars",cars);

        if (!cars) {
            return res.status(400).json({ data: "user not found" });
        }
        res.status(200).json({ data: cars });
    } catch (error) {
        console.log(error);
        res.status(500).json({ data: "internal server error" });
    }
});

//query params for id base
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const cars = await getCarsById(id); // Change 'car' to 'cars'
        if (!cars) {
            res.status(400).json({ data: "user not found" });
            return;
        }
        res.status(200).json({ data: cars });
    } catch (error) {
        console.log(error);
        res.status(500).json({ data: "internal server error" });
    }
});

router.post("/add", async (req, res) => {
    try {
        const newCars = req.body;
        if (!newCars) {
            res.status(400).json({ data: "No details provided" });
        }
        const result = await addCarsData(newCars);
        res.status(200).json({ result: result, message: "New cars added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ data: "internal server error" });
    }
});

router.put("/edit/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        if (!id || !updatedData) {
            return res.status(400).json({ message: "No update cars data" });
        }
        const result = await updateCarsData(id, updatedData);
        res.status(200).json({ result: result, message: "cars updated successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ data: "internal server error" });
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ data: "wrong id" });
        }
        const result = await deleteCarsData(id);
        res.status(200).json({ data: { result: result, message: "Deleted Successfully" } });
    } catch (error) {
        console.log(error);
        res.status(500).json({ data: "Internal server Error" });
    }
});

export const carsRouter = router;





// const token = req.headers["x-auth-token"];
// console.log("token---",token);
// if(!token){
//     console.log("data")
//     return res.status(400).json({data:"Invalid Authorization"})
// }
// const validUser = Jwt.verify(token, process.env.SECERTKEY)
// console.log("validuser--",validUser)