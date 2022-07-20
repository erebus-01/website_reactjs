import React from 'react'
import {
  Header, 
  SearchTop,
  Carousel,
  HorizontalView,
  TwoGame,
  FreeGame,
  GridGame,
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
              <div className="carousel-view">
                <TwoGame/>
              </div>
              <div className="carousel-view">
                <FreeGame/>
              </div>
              <div className="carousel-view">
                <GridGame/>
              </div>
              <div className="carousel-view">
                <HorizontalView category="Games with Achievements" nextButton="nextAchievements" prevButton="prevAchievements"/>
              </div>
              <div className="carousel-view">
                <TwoGame/>
              </div>
              <div className="carousel-view">
                <HorizontalView category="Recently Updated" nextButton="nextUpdated" prevButton="prevUpdated"/>
              </div>
              <div className="carousel-view">
                <TwoGame/>
              </div>
              <div className="carousel-view">
                <HorizontalView category="Most Popular" nextButton="nextPopular" prevButton="prevPopular"/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home