import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import DashBoard from "./pages/Dashboard";

import DashboardLayout from "./layouts/DashboardLayout";

import Problems from "./pages/Problems";
import ProblemSheet from "./pages/ProblemSheet";
import ProblemDetails from "./pages/ProblemDetails";

import Aptitude from "./pages/Aptitude";
import MockTest from "./pages/MockTest";
import Profile from "./pages/Profile";
import AIMentor from "./pages/AIMentor";
import ProgressTracker from "./pages/ProgressTracker";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* AUTH */}
        <Route path="/" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* DASHBOARD LAYOUT */}
        <Route element={<DashboardLayout />}>

          <Route
            path="/dashboard"
            element={<DashBoard />}
          />

          {/* PROBLEMS */}
          <Route
            path="/problems"
            element={<Problems />}
          />

          <Route
            path="/problems/:sheetName"
            element={<ProblemSheet />}
          />

          <Route
            path="/problem/:slug"
            element={<ProblemDetails />}
          />

          {/* OTHER PAGES */}
          <Route
            path="/aptitude-quiz"
            element={<Aptitude />}
          />

          <Route
            path="/mock-tests"
            element={<MockTest />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/ai-mentor"
            element={<AIMentor />}
          />

          <Route
            path="/progress-tracker"
            element={<ProgressTracker />}
          />

        </Route>

      </Routes>

    </BrowserRouter>

  );
}

export default App;