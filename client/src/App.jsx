import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import DashBoard from "./pages/Dashboard";

import DashboardLayout from "./layouts/DashboardLayout";

import Problems from "./pages/Problems";
import ProblemSheet from "./pages/ProblemSheet";
import ProblemDetails from "./pages/ProblemDetails";

import QuizDashboard from "./pages/QuizDashboard";
import CodingContest from "./pages/CodingContest";
import Profile from "./pages/Profile";
import AIMentor from "./pages/AIMentor";
import ProgressTracker from "./pages/ProgressTracker";
import QuizPage from "./pages/QuizPage";
import Quiz from "./pages/Quiz";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* DASHBOARD LAYOUT */}
        <Route element={<DashboardLayout />}>
          {/* Dashboard */}
          <Route path="/dashboard" element={<DashBoard />} />

          {/* Problems */}
          <Route path="/problems" element={<Problems />} />

          <Route
            path="/problems/:sheetName"
            element={<ProblemSheet />}
          />

          <Route
            path="/problem/:slug"
            element={<ProblemDetails />}
          />

          {/* Programming Quiz */}
          <Route
            path="/aptitude-quiz"
            element={<QuizDashboard />}
          />
          <Route
            path="/quiz/:technology"
            element={<Quiz />}
          />

          {/* Coding Contests */}
          <Route
            path="/coding-contests"
            element={<CodingContest />}
          />

          {/* AI Mentor */}
          <Route
            path="/ai-mentor"
            element={<AIMentor />}
          />

          {/* Progress Tracker */}
          <Route
            path="/progress-tracker"
            element={<ProgressTracker />}
          />

          {/* Profile */}
          <Route
            path="/profile"
            element={<Profile />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;