import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import chalk from "chalk";



const app = express();

app.get("/", (req, res) => {
    res.send("API is running")
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    chalk.yellowBright.bold(
      `Server running on port ${PORT}`
    )
  );
});