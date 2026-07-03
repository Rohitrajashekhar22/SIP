import executeCode from "../services/compilerService.js";

export const runCode = async (req, res) => {

    try {

        const {
            language_id,
            code,
            input
        } = req.body;

        const result = await executeCode(
            language_id,
            code,
            input
        );

        res.status(200).json({
            stdout: result.stdout,
            stderr: result.stderr,
            compile_output: result.compile_output
        });

    } catch (error) {

        console.log(error.response?.data || error.message);

        res.status(500).json({
            error:
                error.response?.data ||
                error.message
        });

    }

};