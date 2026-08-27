const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Food = require("./Food");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/canteen")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch(error => {
        console.log(error);
    });

app.get("/", (req, res) => {
    res.send("Canteen App Running");
});

app.get("/foods", async (req, res) => {
    const foods = await Food.find();
    res.json(foods);
});

app.post("/foods", async (req, res) => {
    const food = new Food(req.body);

    await food.save();

    res.json({
        message: "Food added successfully"
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});