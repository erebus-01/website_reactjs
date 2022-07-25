import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Theme/GlobalStyles.js';
import {Home} from './pages'

function App() {
  return (
    <>
      <GlobalStyles/>
      <Home/>
      {/* <SwiperCarousel/> */}
    </>
  );
}

export default App;
