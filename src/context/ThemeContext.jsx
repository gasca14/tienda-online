import React, { useState } from 'react';

const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('ligth');

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

export default ThemeContext;