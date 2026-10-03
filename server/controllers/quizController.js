import Quiz from "../models/Quiz.js";

export const fetchQuiz = async (req, res) => {
  try {
    const { technology } = req.params;

    const questions = await Quiz.aggregate([
      {
        $match: {
          technology: technology.toLowerCase(),
        },
      },
      {
        $sample: {
          size: 20,
        },
      },
      {
        $project: {
          correctAnswer: 0,
          correctAnswerText: 0,
          explanation: 0,
          __v: 0,
          createdAt: 0,
          updatedAt: 0,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      total: questions.length,
      questions,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch quiz",
    });
  }
};