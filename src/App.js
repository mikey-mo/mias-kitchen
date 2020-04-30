/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from './views/header';
import MobileFooter from './views/mobile-footer';
import About from './views/about';
import Menu from './views/menu';
import Footer from './views/footer';
import Services from './views/services';

import './app.scss';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Route component={ScrollToTop}/>
        <Header />
        <Route path="/">
          <Redirect to="/about" />
        </Route>
        <Route exact path="/about" render={About} />
        <Route exact path="/menu" render={Menu} />
        <Route exact path="/services" render={Services} />
        <Footer />
        <MobileFooter />
      </Router>
    </div>
  );
}

export default App;
