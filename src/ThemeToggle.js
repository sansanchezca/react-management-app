import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    document.body.style.backgroundColor = darkMode ? '#333' : '#fff';
    document.body.style.color = darkMode ? '#fff' : '#000';
  }, [darkMode]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>{darkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}</h2>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;
