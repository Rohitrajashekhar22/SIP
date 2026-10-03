import { useNavigate } from "react-router-dom";

export default function Sheets() {

  const navigate = useNavigate();

  const sheets = [
    "Blind75",
    "NeetCode150",
    "StriverSDE",
    "Grind169",
    "TopInterview150",
  ];

  return (

    <div
      className="
      min-h-screen
      flex
      flex-wrap
      justify-center
      items-center
      gap-10
      p-10
      bg-gray-100
      "
    >

      {sheets.map((sheet) => (

        <div
          key={sheet}

          onClick={() =>
            navigate(`/problems/${sheet.toLowerCase()}`)
          }

          className="
          w-52
          h-52
          rounded-full
          bg-blue-500
          text-white
          flex
          items-center
          justify-center
          text-xl
          font-bold
          cursor-pointer
          shadow-xl
          hover:scale-105
          transition
          duration-300
          "
        >

          {sheet}

        </div>

      ))}

    </div>

  );
}