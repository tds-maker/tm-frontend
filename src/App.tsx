import * as React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import asyncComponent from './components/AsyncComponent';

import './assets/css/icons.css';
import './assets/css/style.css';

const AsyncNewTemplate = asyncComponent(() =>
  import('./routes/templates/new-template-page')
);

const Test = () => {
  return <Link to="/templates/new">New</Link>;
};
import PageNavigator from './components/UI/PageNavigation/PageNavigator';
class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Test} />
          <Route path="/page-navigation" component={PageNavigator} />
          <Route
            exact={true}
            path="/templates/new"
            component={AsyncNewTemplate}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
