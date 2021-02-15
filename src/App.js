import React, { useEffect, useState } from 'react';
import Home from './pages/home';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
//theme
import GlobalStyles, { lightTheme, darkTheme } from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
function App() {
    // theme State
    const [theme, setTheme] = useState(true);

    const themeMode = theme ? lightTheme : darkTheme;

    return (
        <div className="App">
            <ThemeProvider theme={themeMode}>
                <GlobalStyles />
                <Nav setTheme={setTheme} theme={theme} />
                <Route path={['/game/:id', '/']}>
                    <Home />
                </Route>
            </ThemeProvider>
        </div>
    );
}

export default App;
