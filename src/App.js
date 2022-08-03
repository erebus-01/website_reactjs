import React from 'react';
import GlobalStyles from './Theme/GlobalStyles.js';
import {Home, Browse, News} from './pages'

function App() {
  return (
    <>
      <GlobalStyles/>
      {/* <Home/> */}
      {/* <Browse/> */}
      <News/>
    </>
  );
}

export default App;
