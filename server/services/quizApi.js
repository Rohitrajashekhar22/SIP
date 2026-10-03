import axios from "axios";

const API_KEY = process.env.QUIZ_API_KEY;

const quizApi = axios.create({
    baseURL: "https://quizapi.io/api/v1",
});


export const getQuiz = async () => {

    try {

        const response = await quizApi.get("/quizzes", {

            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },

            params: {
                limit: 5,
            },

        });

        console.log(response.data);
        console.log(response.data.data);

        return response.data;

    } catch (error) {

        console.error(error.response?.data);
        console.error(error.message);

        return [];

    }

};