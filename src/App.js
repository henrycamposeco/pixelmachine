import React, {Suspense, lazy} from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import theme from './theme/theme';
import {MainContext, defaultControllerValues} from './store/contextProvider';

const Home = lazy(() => import('./pages/main'));
const About = lazy(() => import('./pages/about'));

const App = () => {
    const [controller, setController] = React.useState(defaultControllerValues);
    return (
        <MainContext.Provider value={{controller, setController}}>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <MuiThemeProvider theme={theme}>
                            <CssBaseline/>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                        </MuiThemeProvider>
                    </Switch>
                </Suspense>
            </Router>
        </MainContext.Provider>
    )
};


export default App;