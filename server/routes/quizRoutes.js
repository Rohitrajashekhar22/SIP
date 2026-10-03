import express from "express";
import { fetchQuiz } from "../controllers/quizController.js";

const router = express.Router();

router.get("/:technology", fetchQuiz);

export default router;