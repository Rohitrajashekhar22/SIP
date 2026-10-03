import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import problemRoutes from './routes/problemRoutes.js';
import compilerRoutes from './routes/compilerRoutes.js';
import quizRoutes from "./routes/quizRoutes.js";


dotenv.config();
const app =express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use('/api/auth', userRoutes);
app.use('/api/problems', problemRoutes);
app.use('/api/compiler', compilerRoutes);
app.use("/api/quiz", quizRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connectDB();

export default app;