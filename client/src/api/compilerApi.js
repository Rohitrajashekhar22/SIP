import axios from "axios";

export const runCode = async ({ language_id, code, input }) => {
	const response = await axios.post(
		"http://localhost:5000/api/compiler/run",
		{
			language_id,
			code,
			input,
		}
	);

	return response.data;
};
