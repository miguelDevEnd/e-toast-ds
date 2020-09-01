import React from 'react';
import Sidebar from './containers/sidebar/Sidebar'
import Footer from './components/footer/Footer';
import Home from './views/home/Home';
import DesignGuidelines from './views/designGuidelines/DesignGuidelines';
import ShapeGuidelines from './views/shapeGuidelines/ShapeGuidelines';
import TokenPrinciples from './views/tokenPrinciples/TokenPrinciples';
import ComponentOverview from './views/componentOverview/componentOverview';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.scss';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/DesignGuidelines',
    component: DesignGuidelines
  },
  {
    path: '/ShapeGuidelines',
    component: ShapeGuidelines
  },
  {
    path: '/TokenPrinciples',
    component: TokenPrinciples
  },
  {
    path: '/ComponentOverview',
    component: ComponentOverview
  }
];

function App() {
  return (
    <div className="App">
      <Router>
        {/* All views have a sidebar*/}
        <Sidebar />
        <div className="Content">
          <Switch>
            {routes.map((route, key) => (
              <Route
                key={key}
                path={route.path}
                exact={true}
                component={route.component}
              />
            ))}
            <Redirect to='/' />
          </Switch>
          {/* All views have a footer even if designs don't show it*/}
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
