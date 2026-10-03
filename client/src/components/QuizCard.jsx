import { useNavigate } from "react-router-dom";

function QuizCard({ quiz }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/quiz/${quiz.slug}`)}
      className={`
        ${quiz.color}
        ${quiz.span}
        relative
        rounded-3xl
        p-6
        text-white
        overflow-hidden
        cursor-pointer
        hover:scale-105
        hover:shadow-2xl
        transition-all
        duration-300
      `}
    >
      {/* Decorative dots */}
      <div className="absolute top-5 right-5 grid grid-cols-2 gap-2">
        <div className="w-3 h-3 rounded-full bg-white/40"></div>
        <div className="w-3 h-3 rounded-full bg-white/40"></div>
        <div className="w-3 h-3 rounded-full bg-white/40"></div>
        <div className="w-3 h-3 rounded-full bg-white/40"></div>
      </div>

      {/* Title */}
      <h2 className="text-2xl lg:text-3xl font-bold leading-tight w-[75%]">
        {quiz.name}
      </h2>

      {/* Details */}
      <div className="mt-4">
        <p className="text-lg font-semibold">{quiz.questions} Questions</p>
        <p className="text-white/90">Easy + Medium</p>
      </div>

      {/* Start Button */}
      <button
        className="
          absolute
          bottom-5
          right-5
          bg-white
          text-black
          px-5
          py-2
          rounded-full
          font-semibold
          shadow-lg
          hover:bg-gray-100
        "
      >
        Start →
      </button>
    </div>
  );
}

export default QuizCard;