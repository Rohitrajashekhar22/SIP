import express from "express";
import {
    getAllProblems,
    getFilteredProblems,
    getProblemBySlug,
} from "../controllers/problemController.js";

const router = express.Router();

router.get("/", getAllProblems);

router.get("/filter", getFilteredProblems);

router.get("/:slug", getProblemBySlug);

export default router;