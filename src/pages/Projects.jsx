import React from 'react'
import NavPortfolio from '../components/NavPortfolio'
import FooterPortfolio from '../components/FooterPortfolio'
import CarouselProjects from '../components/CarouselProjects'

function Projects() {
  return (
    <div>
        <nav>
          <NavPortfolio/>
        </nav>
        <main>  
          <CarouselProjects/>
        </main>
        <footer>
          <FooterPortfolio/>
        </footer>
    </div>
  )
}

export default Projects