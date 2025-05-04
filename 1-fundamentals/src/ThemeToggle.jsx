// src/ThemeToggle.jsx
import { useState, useEffect } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#ffffff" : "#121212";
    document.body.style.color = theme === "light" ? "#000000" : "#ffffff";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div style={{ padding: "1rem" }}>
      <button onClick={toggleTheme}>
        შეცვალე თემა ({theme === "light" ? "Dark Mode" : "Light Mode"})
      </button>
    </div>
  );
}

export default ThemeToggle;
