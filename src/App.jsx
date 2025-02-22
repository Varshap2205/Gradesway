import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import LessonForm from "./components/LessonForm";
import { AuthProvider } from "./context/AuthContext.jsx";
import "./index.css"; // Import the CSS file with Tailwind directives

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<LessonForm />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
