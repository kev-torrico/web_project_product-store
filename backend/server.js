// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

//This reads the .env file and makes environment variables accessible via process.env.
dotenv.config();
//It initialize the express app
const app = express();

app.get("/products", (req, resp) => {
  //   resp.send("Server is ready123");
});

//It starts the server and connect to the database
app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
