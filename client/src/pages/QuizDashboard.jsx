import QuizCard from "../components/QuizCard";
import quizCategories from "../data/quizCategories";

function QuizDashboard(){

return(

<div className="min-h-screen bg-slate-900 p-10">

<h1 className="text-5xl text-white font-bold mb-8">

Programming Quiz

</h1>

<input

type="text"

placeholder="Search Technology..."

className="w-full p-4 rounded-xl mb-8 outline-none"

/>

<div className="grid grid-cols-3 auto-rows-[180px] gap-5">

{

quizCategories.map((quiz)=>(

<QuizCard

key={quiz.name}

quiz={quiz}

/>

))

}

</div>

</div>

);

}

export default QuizDashboard;