import React from 'react';

import Header from './views/header';
// import Body from './views/body';
import MobileFooter from './views/mobile-footer';

import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Body /> */}
      <MobileFooter />
    </div>
  );
}

export default App;
