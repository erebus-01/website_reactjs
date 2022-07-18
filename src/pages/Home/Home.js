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
              </div>
              <div className="carousel-view">
                <HorizontalView category="Summer Spotlight" nextButton="nextSummer" prevButton="prevSummer"/>
              </div>
              {/* <div className="carousel-view">
                <HorizontalView category="Games with Achievements" nextButton="nextAchievements" prevButton="prevAchievements"/>
              </div>
              <div className="carousel-view">
                <HorizontalView category="Recently Updated" nextButton="nextUpdated" prevButton="prevUpdated"/>
              </div> */}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home