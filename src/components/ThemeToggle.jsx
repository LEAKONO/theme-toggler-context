import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-6 py-2 bg-indigo-600 text-white dark:bg-yellow-400 dark:text-black rounded-lg shadow-md transition"
    >
      Switch to {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggle;
