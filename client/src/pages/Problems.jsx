import { useNavigate } from "react-router-dom";

function Problems() {
  const navigate = useNavigate();

  const sheets = [
    { name: "Blind75", color: "bg-rose-500", grid: "md:col-span-2 md:row-span-2" },
    { name: "NeetCode150", color: "bg-amber-400", grid: "md:col-span-1 md:row-span-1" },
    { name: "StriverSDE", color: "bg-emerald-500", grid: "md:col-span-1 md:row-span-3" }, // Made taller to fill the right side
    { name: "Grind169", color: "bg-indigo-600", grid: "md:col-span-1 md:row-span-1" },
    { name: "TopInterview150", color: "bg-violet-500", grid: "md:col-span-3 md:row-span-1" }, // Made wider to fill the bottom
  ];

  return (
    // Outer container: forces everything to fit the screen exactly
    <div className="h-screen w-full bg-slate-900 p-3 md:p-6 overflow-hidden rounded-[50px]">
      
      {/* The Rounded Frame for the whole puzzle */}
      <div className="h-full w-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-900">
        
        <div className="grid h-full w-full grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-3">
          {sheets.map((sheet) => (
            <div
              key={sheet.name}
              onClick={() => navigate(`/problems/${sheet.name.toLowerCase()}`)}
              className={`
                ${sheet.color} ${sheet.grid}
                relative group cursor-pointer overflow-hidden
                flex flex-col justify-end p-8
                border-b-8 border-r-8 border-black/20
                hover:border-b-2 hover:border-r-2 hover:translate-x-1 hover:translate-y-1
                active:scale-95 transition-all duration-300
              `}
            >
              {/* Subtle background pattern for Lego feel */}
              <div className="absolute top-6 right-6 opacity-30 group-hover:rotate-12 transition-transform duration-500">
                 <div className="grid grid-cols-2 gap-3">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-5 h-5 rounded-full bg-white shadow-inner" />
                    ))}
                 </div>
              </div>

              <h2 className="text-white text-3xl md:text-5xl font-black tracking-tighter drop-shadow-lg leading-none uppercase">
                {sheet.name}
              </h2>
              
              <p className="text-white/90 font-bold mt-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                START SOLVING →
              </p>

              {/* Edge highlight for 3D feel */}
              <div className="absolute inset-0 border-t-2 border-l-2 border-white/10 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Problems;