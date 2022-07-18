import React from 'react'
import {
  Header, 
  SearchTop,
  Carousel,
  HorizontalView,
  // ThreeGame,
  // FreeGame,
  // GridGame,
  // Achievements,
  // UpdateGame,
  // Catalog,
  // Footer
} from './Sections'

import './style.css'

function Home() {
  return (
    <>
      <Header />
      <main className='main-content'>
        <SearchTop />
        <div className="view">
          <div className="container">
            <div className="game-container">
              <div className="carousel-view">
                <Carousel/>
                <HorizontalView/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home