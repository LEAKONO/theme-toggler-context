// src/App.jsx
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-all">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            Theme Toggler App
          </h1>
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
