import Problem from "../models/Problem.js";

export const getAllProblems = async (req, res) => {

  try {

    const problems = await Problem.find()
      .select("title difficulty topic");

    res.json(problems);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProblemById = async (req, res) => {

  try {

    const problem = await Problem.findById(req.params.id);

    if (!problem) {

      return res.status(404).json({
        message: "Problem not found",
      });
    }

    res.json(problem);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProblemBySlug = async (req, res) => {

  try {

    const problem = await Problem.findOne({
      slug: req.params.slug,
    });

    if (!problem) {

      return res.status(404).json({
        message: "Problem not found",
      });
    }

    res.json(problem);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

export const getFilteredProblems = async (req, res) => {

  try {

    const { sheet } = req.query;

    console.log("Sheet:", sheet);

    const problems = await Problem.find({
      sheet: sheet,
    });

    res.json(problems);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};