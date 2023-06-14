import React, { useState } from 'react';

const useToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
      setDarkMode(!darkMode);
    };
    return [darkMode, toggleTheme];
};

export default useToggle;