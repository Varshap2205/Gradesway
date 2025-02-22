import { useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <button
      className={`p-2 ${darkMode ? "bg-black text-white" : "bg-gray-200 text-black"}`}
      onClick={() => setDarkMode(!darkMode)}
    >
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;
