import { useParams } from "react-router-dom";

function QuizPage() {
  const { technology } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-5xl font-bold">
        {technology.toUpperCase()} Quiz
      </h1>
    </div>
  );
}

export default QuizPage;