// App Router

const Route = ReactRouterDOM.Route;
const HashRouter = ReactRouterDOM.HashRouter;
const Switch = ReactRouterDOM.Switch;

function App() {
    return (
        <div>
            <ul>
                <li><a href="#/">Home</a></li>
                <li><a href="#/about">About</a></li>
            </ul>
            <HashRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    );
}