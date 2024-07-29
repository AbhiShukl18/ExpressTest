import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AllRoutes from "./Routes/index.js";

// const express=require("express");
const app = express();
dotenv.config();
app.use(express.json());
app.get("/", function (req, res) {
  res.send("working.");
});

app.use("/api/v1", AllRoutes);

// app.listen(8001);




mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB connected."));

app.listen(process.env.PORT_NUMBER, () => {
  console.log(`Server is running on port ${process.env.PORT_NUMBER}.`);
});