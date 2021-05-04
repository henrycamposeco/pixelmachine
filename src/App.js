import React, {Suspense, lazy} from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import theme from './theme/theme';
import {MainContext, defaultControllerValues} from './store/contextProvider';
import {ContextDevTool} from 'react-context-devtool';
import Canvas from "./components/Canvas";

const Home = lazy(() => import('./pages/main'));
const About = lazy(() => import('./pages/about'));

const App = () => {
    const [controller, setController] = React.useState(defaultControllerValues);
    const [isLoading, setIsLoading] = React.useState(false);
    const [keyframes, setKeyframes] = React.useState([]);
    const [mediaType, setMediaType] = React.useState();
    const [currentKeyFrame, setCurrentKeyFrame] = React.useState(0);
    const [mediaContent, setMediaContent] = React.useState();
    const [canvasObject, setCanvasObject] = React.useState({
        canvasOriginal: <Canvas id="canvasOriginal">canvas not supported</Canvas>,
        canvasResult: <Canvas id="canvasResult" variant="secondary">canvas not supported</Canvas>
    });

    const contextObjects = {
        controller,
        setController,
        isLoading,
        setIsLoading,
        keyframes,
        setKeyframes,
        currentKeyFrame,
        setCurrentKeyFrame,
        mediaType,
        setMediaType,
        canvasObject,
        setCanvasObject,
        mediaContent,
        setMediaContent,
    };

    return (
        <MainContext.Provider value={contextObjects}>
            <ContextDevTool data-testid="main" context={MainContext} id="MainContext" displayName="MainContext"/>
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