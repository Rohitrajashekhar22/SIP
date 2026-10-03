import axios from "axios";

const executeCode = async (
    language_id,
    code,
    input
) => {

    const response = await axios.post(
        "https://ce.judge0.com/submissions?base64_encoded=false&wait=true",
        {
            language_id,
            source_code: code,
            stdin: input
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    return response.data;
};

export default executeCode;