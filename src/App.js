import React, { useEffect, useState } from 'react';
import Home from './pages/home';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
//theme
import GlobalStyles, { lightTheme, darkTheme } from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
function App() {
    const [theme, setTheme] = useState('dark');

    const themetoggle = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    return (
        <div className="App">
            <ThemeProvider theme={themeMode}>
                <GlobalStyles />
                <Nav />
                <Route path={['/game/:id', '/']}>
                    <Home />
                </Route>
            </ThemeProvider>
        </div>
    );
}

export default App;
