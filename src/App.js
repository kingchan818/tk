import React, { useEffect } from 'react';
import Home from './pages/home';
import GlobalStyles from './components/GlobalStyle';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <Nav />
            <Route path={['/game/:id', '/']}>
                <Home />
            </Route>
        </div>
    );
}

export default App;
