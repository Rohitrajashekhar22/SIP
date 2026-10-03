import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({

    technology: {
        type: String,
        required: true,
    },

    topic: {
        type: String,
        required: true,
    },

    difficulty: {
        type: String,
        enum: ["Easy", "Medium", "Hard"],
        required: true,
    },

    question: {
        type: String,
        required: true,
    },

    options: {
        type: [String],
        required: true,
    },

    correctAnswer: {
        type: Number,
        required: true,
    },

    correctAnswerText: {
        type: String,
        required: true,
    },

    explanation: {
        type: String,
        required: true,
    },

    marks: {
        type: Number,
        default: 1,
    }

}, {
    timestamps: true
});

export default mongoose.model("Quiz", quizSchema);  