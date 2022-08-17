import React from 'react';
import GlobalStyles from './Theme/GlobalStyles.js';
import {Home, Browse, News, DetailsGame, Wishlist} from './pages'

function App() {
  return (
    <>
      <GlobalStyles/>
      {/* <Home/> */}
      {/* <Browse/> */}
      {/* <News/> */}
      {/* <DetailsGame/> */}
      <Wishlist />
    </>
  );
}

export default App;
