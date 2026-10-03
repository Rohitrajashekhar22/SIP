import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div >

      <h1 className = "text-3xl font-bold mb-8">
        PrepMate
      </h1>

      <div  className="flex flex-col gap-4">

        <NavLink
          to="/dashboard" 
        >
          Dashboard
        </NavLink>
        <br />
        

        <NavLink
          to="/problems"
        >
          Problems
        </NavLink>
        <br />

        <NavLink
          to="/aptitude-quiz"
        
        >
           Quiz
        </NavLink>
        <br />

        <NavLink
          to="/coding-contests"
        
        >
          Coding Contests
        </NavLink>
        <br />

        <NavLink
          to="/ai-mentor"
        
        >
          AI Mentor
        </NavLink>
        <br />

        <NavLink
          to="/progress-tracker"
        
        >
          Progress Tracker
        </NavLink>
        <br />

        <NavLink
          to="/profile"
        
        >
          Profile
        </NavLink>
        <br />

        <NavLink
          to="/logout"
        
        >
          Logout
        </NavLink>


      </div>

    </div>
  );
}

export default Sidebar;