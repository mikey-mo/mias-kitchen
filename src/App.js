import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './views/header';
// import Body from './views/body';
import MobileFooter from './views/mobile-footer';

import './app.scss';
import Body from './views/body';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/">
          <Redirect to="/about" />
        </Route>
        <Route exact path="/about" render={Body} />
      </Router>
      {/* <Body /> */}
      <MobileFooter />
    </div>
  );
}

export default App;
