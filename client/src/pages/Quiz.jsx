import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getQuizQuestions } from "../services/quizService";
function Quiz() {


    console.log("Quiz component rendered");

    const { technology } = useParams();


    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        async function fetchQuestions() {

            try {
                const response = await getQuizQuestions(technology);
console.log(response.data.questions);
                setQuestions(response.data.questions);

            } catch (err) {

                setError("Failed to fetch questions");

            } finally {

                setLoading(false);

            }

        }

        fetchQuestions();

    }, [technology]);

    if (loading) {
        return <h2>Loading Questions...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (

        <div>

            <h1>{technology} Quiz</h1>

            <h2>{questions[0]?.question}</h2>

        </div>

    );

}

export default Quiz;