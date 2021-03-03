import {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Home = lazy(() => import('./pages/main'));
const About = lazy(() => import('./pages/about'));

const App = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </Switch>
        </Suspense>
    </Router>
);

export default App;