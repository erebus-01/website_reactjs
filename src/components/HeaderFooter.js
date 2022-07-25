import React from 'react'
import Carousel from '../pages/Home/Sections/Carousel.js'
import Catalog from '../pages/Home/Sections/Catalog.js'
import FixedView from '../pages/Home/Sections/FixedView.js'
import Footer from '../pages/Home/Sections/Footer.js'
import FreeGame from '../pages/Home/Sections/FreeGame.js'
import GridGame from '../pages/Home/Sections/GridGame.js'
import Header from '../pages/Home/Sections/Header.js'
import HorizontalView from '../pages/Home/Sections/HorizontalView.js'
import SearchTop from '../pages/Home/Sections/SearchTop.js'
import TwoGame from '../pages/Home/Sections/TwoGame.js'

const HeaderFooter = ({containerContent}) => {
  return (
    <>
      <Header />
      <main className='main-content'>
        <div className="view">
          <SearchTop />
          <div className="container">
            <div className="game-container">
              {containerContent}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default HeaderFooter