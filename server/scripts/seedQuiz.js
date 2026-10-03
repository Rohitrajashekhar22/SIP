import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

import Quiz from "../models/Quiz.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URL);

const folder = path.join(process.cwd(), "quiz-json");

const files = fs.readdirSync(folder);

for(const file of files){

    const data = JSON.parse(

        fs.readFileSync(

            path.join(folder,file),

            "utf-8"

        )

    );

    await Quiz.insertMany(data);

    console.log(file,"Inserted");

}

console.log("Finished");

process.exit();