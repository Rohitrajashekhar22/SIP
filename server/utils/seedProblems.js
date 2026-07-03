import blind75 from "../data/blind75.js";
import grind169 from "../data/grind169.js";
import neetcode150 from "../data/neetcode150.js";
import striverSDE from "../data/striverSDE.js";
import topInterview150 from "../data/topInterview150.js";
import mongoose from "mongoose";
import Problem from "../models/Problem.js";
import connectDB from "../config/db.js";
import dotenv from "dotenv";
dotenv.config();


const seedProblems = async () => {
  try {

    // connect mongoDB
    await connectDB();

    console.log("MongoDB Connected");

    // delete old problems
    await Problem.deleteMany();

    console.log("Old Problems Deleted");

    // combine all arrays
    const allProblems = [
      ...blind75,
      ...neetcode150,
      ...striverSDE,
      ...grind169,
      ...topInterview150,
    ];
 console.log("Blind75:", blind75.length);
console.log("TopInterview150:", topInterview150.length);
console.log("StriverSDE:", striverSDE.length);
console.log("Grind169:", grind169.length);
console.log("Neetcode150:", neetcode150.length);

    // insert all problems
    await Problem.insertMany(allProblems);

    console.log("Problems Inserted Successfully");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);
  }
};

seedProblems();