import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to login after logout
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="bg-purple-600 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-3xl font-bold text-gray-800">Welcome to Your Dashboard 🎉</h2>
        <p className="text-gray-600 mt-2">Manage your content, check your data, and explore features.</p>
      </div>
    </div>
  );
};

export default Dashboard;
