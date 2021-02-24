import Home from './pages/Home';
import Contact from './pages/Contact';
import DefaultLayout from './layouts/Default';
import About from './pages/About';



import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <DefaultLayout>
      <Home></Home>
    </DefaultLayout>
  },
  {
    path: '/contact',
    main: () => <DefaultLayout>
      <Contact></Contact>
    </DefaultLayout>
  },
  {
    path: '/about',
    main: () => <DefaultLayout>
      <About></About>
    </DefaultLayout>
  },
]

const getRoutes = () => {
  const routeComponents = routes.map((route, index) => {
    return <Route
      key={index}
      exact={route.exact}
      path={route.path}
    >
      {route.main}
    </Route>
  })
  return routeComponents
}


function App() {

  return (
    <Router>
      <div>
        <Switch>
          {getRoutes()}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
